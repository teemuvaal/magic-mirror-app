import CurrentTime from './components/CurrentTime';
import StopInfo from './components/StopInfo'; // Adjust the import path as necessary

export default function StopPage() {
  // My local stops here as id
  const id = 'HSL:1220127'
  const id2 = 'HSL:1220105'
  const id3 = 'HSL:1220205'
  const id4 = 'HSL:1220403'
  const id5 = 'HSL:1220404'
  return (
    <div className="ml-5 mt-5">
      <CurrentTime />
      <h1 className="text-3xl">Schedule</h1>
      <StopInfo id={id}  type="bus"/>
      <StopInfo id={id2} type="bus" />
      <StopInfo id={id4} />
      <StopInfo id={id5} />
    </div>
  );
}
