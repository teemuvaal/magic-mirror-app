# Home Info Board

This is build to create a website to be used in my "magic mirror" setup at home.
Plan is to run just this website with Raspberry Pi, LCD monitor and a "magic mirror" (= two sided mirror).

## Notes

Everything is configured with hard values (ie. stops, locations). To get HSL Schedul to work, get an API access through
[Digitransit](https://digitransit.fi/en/developers/apis/1-routing-api/1-graphiql/)
Weather is handled with free tier from [WeatherAPI](https://www.weatherapi.com)

## To-Do

- HSL Schedule for nearby stops (done)
        - Needs styling
        - Needs line number
        - Update time (every 1min?)
        - Make Arrives in "realtime"
- Clock (Need to make it prettier...) (done)
        - Needs styling (thick font, large size)
- Date (It's there, basically)
- Weather (WeatherAPI.com free plan)
        - First version done
- Optimize for "magic mirror" environment