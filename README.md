# Home Info Board

This is build to create a website to be used in my "magic mirror" setup at home.
Plan is to run just this website with Raspberry Pi, LCD monitor and a "magic mirror" (= two sided mirror).

## How to run

```bash
npm install
npm run dev
```

Setup .env with your Telegram bot token and HSL API key:
DATA_API_KEY="" // Get from HSL
WEATHER_API_KEY="" // Get from WeatherAPI
TELEGRAM_API_KEY="" // Get through telegram

## Notes

Everything is configured with hard values (ie. stops, locations). To get HSL Schedul to work, get an API access through
[Digitransit](https://digitransit.fi/en/developers/apis/1-routing-api/1-graphiql/)
Weather is handled with free tier from [WeatherAPI](https://www.weatherapi.com)

Now also supports Telegram messages through [Telegram Bot API](https://core.telegram.org/bots/api)

## To-Do

- HSL Schedule for nearby stops (done)
- Clock (Need to make it prettier...) (done)
        - Needs styling (thick font, large size)
- Date (It's there, basically)
- Weather (WeatherAPI.com free plan)
        - First version done
        - Make it prettier
- Optimize for "magic mirror" environment
