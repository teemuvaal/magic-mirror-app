# BUS SCHEDULE WITH HSL API

## API URL

https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql

## Info

Relevant stop id: HSL:1220127 (Paavalinkirkko bus to HKI)

All nearby stops:
{
  "data": {
    "stops": [
      {
        "gtfsId": "HSL:1220127", (bus to HKI)
        "name": "Paavalinkirkko",
        "code": "H3026",
        "lat": 60.198195,
        "lon": 24.961468
      },
      {
        "gtfsId": "HSL:1220105", (bus away from HKI)
        "name": "Paavalinkirkko",
        "code": "H3025",
        "lat": 60.19842,
        "lon": 24.96205
      },
      {
        "gtfsId": "HSL:1220205", (bus to vantaa)
        "name": "Paavalinkirkko",
        "code": "H3027",
        "lat": 60.19922,
        "lon": 24.96206
      },
      {
        "gtfsId": "HSL:1220403", (tram to arabia)
        "name": "Paavalinkirkko",
        "code": "H0321",
        "lat": 60.19854,
        "lon": 24.961785
      },
      {
        "gtfsId": "HSL:1220404", (tram to HKI)
        "name": "Paavalinkirkko",
        "code": "H0330",
        "lat": 60.198319,
        "lon": 24.961701
      }
    ]
  }
}

example request:

{
  stop(id: "HSL:1140447") {
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
}

{
  stop(id: "HSL:1220127") {
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
}

Secret:
ba0e1778ce72473d8ddaf7c747090ab8


SVG Attribute:

