'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function StopInfo({ id, type }) {
  const [stopData, setStopData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
  
    async function fetchData() {
      const response = await fetch(`/api/stop?id=${id}`);
      const data = await response.json();
      setStopData(data);
      setLoading(false);
    }
  
    fetchData();
    const interval = setInterval(fetchData, 30000); // Currently set to refresh times once a minute
  
    return () => clearInterval(interval); // Clear interval on component unmount or id change
  }, [id]);

  const calculateWaitingTime = (realtimeArrival, serviceDay) => {
    const currentTime = Date.now() / 1000; // Current time in seconds
    const arrivalTimeInSeconds = serviceDay + realtimeArrival; // Arrival time in seconds
    const waitingTimeInSeconds = arrivalTimeInSeconds - currentTime;
    const waitingTimeInMinutes = Math.round(waitingTimeInSeconds / 60); // Convert to minutes and round off
    return waitingTimeInMinutes > 0 ? `${waitingTimeInMinutes} minutes` : 'Arriving';
  };
  // Utility function to convert Unix timestamp to local time string
  const convertToLocaleTime = (unixTimestamp, serviceDay) => {
  // Ensure both serviceDay and unixTimestamp are treated as seconds and combined
  // Then, convert the total seconds to milliseconds for the Date constructor
  const fullTimestamp = new Date((serviceDay + unixTimestamp) * 1000);
  return fullTimestamp.toLocaleTimeString();
};

  if (loading) return <p>Loading...</p>;
  if (!stopData) return <p>No data found.</p>;

  return (
    <div>
      <div className='flex flex-row'>
      {<Image className='mr-3 mb-2' src={type === 'bus' ? "./bus.svg" : "./tram.svg"} width={40} height={40}/>}<h1>{stopData.data.stop.name}</h1>
      </div>
      <div className='flex mb-4'>
      {/* Map through stoptimesWithoutPatterns to create a card for each */}
      {stopData.data.stop.stoptimesWithoutPatterns.map((time, index) => (
        <section key={index} className=' w-1/2 mr-5'>
          <div className='text-pretty p-2 rounded-t-lg bg-zinc-900 border-b-2 border-white font-bold'>Destination: {time.headsign}</div>
          <div className='p-2'>Arrives in: {calculateWaitingTime(time.realtimeArrival, time.serviceDay)}</div>
          <div className='p-2 text-sm'>Arrival: {convertToLocaleTime(time.realtimeArrival, time.serviceDay)}</div>
        </section>
      ))}
      </div>
    </div>
  );
}
