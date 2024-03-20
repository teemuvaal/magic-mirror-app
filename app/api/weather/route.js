export async function GET(request) {
  // Extract the 'city' query parameter from the request URL
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city'); // This will be 'Helsinki' if the request URL is '/api/weather?city=Helsinki'
  const key = process.env.WEATHER_API_KEY;

  // Use the 'city' variable in your fetch request URL
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}