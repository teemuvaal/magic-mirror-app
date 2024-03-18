export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const query = `
    {
      stop(id: "${id}") {
        name
        stoptimesWithoutPatterns {
          scheduledArrival
          realtimeArrival
          arrivalDelay
          scheduledDeparture
          realtimeDeparture
          departureDelay
          realtime
          realtimeState
          serviceDay
          headsign
        }
      }
    }`;

    const res = await fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': process.env.DATA_API_KEY,
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();

    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  }
