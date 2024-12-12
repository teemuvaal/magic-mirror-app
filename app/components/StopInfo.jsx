'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getStopData } from '../actions';
import { settings } from '../../config';

export default function StopInfo({ id, type }) {
  const [stopData, setStopData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
  
    async function fetchData() {
      const data = await getStopData(id);
      setStopData(data);
      setLoading(false);
    }
  
    fetchData();
    const interval = setInterval(fetchData, 30000);
  
    return () => clearInterval(interval);
  }, [id]);

  const calculateWaitingTime = (realtimeArrival, serviceDay) => {
    const currentTime = Date.now() / 1000;
    const arrivalTimeInSeconds = serviceDay + realtimeArrival;
    const waitingTimeInSeconds = arrivalTimeInSeconds - currentTime;
    const waitingTimeInMinutes = Math.round(waitingTimeInSeconds / 60);
    return waitingTimeInMinutes;
  };

  const convertToLocaleTime = (unixTimestamp, serviceDay) => {
    const fullTimestamp = new Date((serviceDay + unixTimestamp) * 1000);
    return fullTimestamp.toLocaleTimeString(settings.locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  if (loading) return <p>Loading...</p>;
  if (!stopData) return <p>No data found.</p>;

  // Filter out arrivals that are too soon
  const filteredStopTimes = stopData.data.stop.stoptimesWithoutPatterns.filter(time => {
    const waitingTime = calculateWaitingTime(time.realtimeArrival, time.serviceDay);
    return waitingTime >= settings.minArrivalMinutes;
  });

  if (filteredStopTimes.length === 0) return null;

  return (
    <div className=''>
      <div className='flex flex-row'>
        {<Image className='mr-3 mb-2' src={type === 'bus' ? "./bus.svg" : "./tram.svg"} width={40} height={40} alt="icon"/>}
        <h1>{stopData.data.stop.name}</h1>
      </div>
      <div className='flex mb-4'>
        {filteredStopTimes.map((time, index) => (
          <section key={index} className='w-[260px] mr-5'>
            <div className='text-pretty p-2 rounded-t-lg bg-zinc-900 border-b-2 border-white font-bold'>
              <span className="mr-2 bg-white text-black px-2 py-1 rounded">{time.trip.route.shortName}</span>
              {time.headsign}
            </div>
            <div className='p-2'>Arrives in: {calculateWaitingTime(time.realtimeArrival, time.serviceDay)} minutes</div>
            <div className='p-2 text-sm'>Arrival: {convertToLocaleTime(time.realtimeArrival, time.serviceDay)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
