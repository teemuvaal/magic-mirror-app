import CurrentTime from './components/CurrentTime';
import StopInfo from './components/StopInfo'; // Adjust the import path as necessary
import CurrentDate from './components/CurrentDate';
import CurrentDayWeather from './components/CurrentWeather';
import MessageBox from './components/MessageBox'
import settings from '../config.js'

export default function StopPage() {

  return (
    <div className="ml-5 mt-5">
      <div className="flex justify-between flex-row-reverse mr-10 mb-2">
      <CurrentTime />
      <CurrentDayWeather city={settings.location} />
      <CurrentDate />
      </div>
      <div className='my-5'>
      {/* Telegram messages */}
      <MessageBox />
      </div>
      {/* Stops are defined in magicmirror.config.js */}
      <div className='flex flex-col gap-5'>
        {settings.stops.map((stop, index) => (
          <StopInfo key={index} id={stop.id} type={stop.type} />
        ))}
      </div>
    </div>
  );
}
