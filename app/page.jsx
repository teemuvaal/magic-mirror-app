import CurrentTime from './components/CurrentTime';
import StopInfo from './components/StopInfo'; // Adjust the import path as necessary
import CurrentDate from './components/CurrentDate';
import CurrentDayWeather from './components/CurrentWeather';
import MessageBox from './components/MessageBox';

export default function StopPage() {
  // My local stops here as id
  // You can find id from HSL API for each stop
  // Type will select correct icon to be displayed. If no type will default to "tram"
  const id = 'HSL:1220127'
  const id2 = 'HSL:1220105'
  const id4 = 'HSL:1220403'
  const id5 = 'HSL:1220404'
  return (
    <div className="ml-5 mt-5">
      <div className="flex justify-between flex-row-reverse mr-10 mb-2">
      <CurrentTime />
      <CurrentDayWeather city="Helsinki" />
      <CurrentDate />
      </div>
      <div className='my-5'>
      <MessageBox />
      </div>
      <div className='flex flex-col gap-5'>
      <StopInfo id={id}  type="bus"/>
      <StopInfo id={id2} type="bus" />
      <StopInfo id={id4} />
      <StopInfo id={id5} />
      </div>
    </div>
  );
}
