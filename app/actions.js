"use server"

export async function getMessage() {
    try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/getUpdates`, {
            next: { revalidate: 0 }
        });
        
        if (!res.ok) {
            throw new Error('Failed to fetch messages');
        }

        const data = await res.json();
        
        if (data.ok && data.result && Array.isArray(data.result)) {
            const sortedMessages = data.result.sort((a, b) => b.message.date - a.message.date);
            return sortedMessages;
        }
        
        return [];
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}

export async function getStopData(id) {
    try {
        const query = `
        {
          stop(id: "${id}") {
            name
            patterns {
              route {
                shortName
              }
            }
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
              trip {
                route {
                  shortName
                }
              }
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
            next: { revalidate: 0 }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch stop data');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching stop data:', error);
        return null;
    }
}