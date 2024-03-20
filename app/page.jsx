import CurrentTime from './components/CurrentTime';
import StopInfo from './components/StopInfo'; // Adjust the import path as necessary
import CurrentDate from './components/CurrentTime';

export default function StopPage() {
  // My local stops here as id
  // You can find id from HSL API for each stop
  // Type will select correct icon to be displayed. If no type will default to "tram"
  const id = 'HSL:1220127'
  const id2 = 'HSL:1220105'
  const id3 = 'HSL:1210163'
  const id4 = 'HSL:1220403'
  const id5 = 'HSL:1220404'
  return (
    <div className="ml-5 mt-5">
      <div className="flex flex-row-reverse mr-10">
      <CurrentTime />
      </div>
      <StopInfo id={id3}  type="bus"/>
      <StopInfo id={id}  type="bus"/>
      <StopInfo id={id2} type="bus" />
      <StopInfo id={id4} />
      <StopInfo id={id5} />
    </div>
  );
}
