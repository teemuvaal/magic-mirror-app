// Config is used to enter the desired stops, and location. You can find id from HSL API for each stop
// Type is used to select correct icon to be displayed. If no type will default to "bus"
// TO-DO: Add more types to support ferries and trains
// TO-DO: Add support for live citybike status for nearby stations
// TO-DO: Add optional logic for defining location (ie. from IP address) and show nearby stops?
// Get the stop info from https://digitransit.fi/en/developers/apis/1-routing-api/stops/ , id is required to get info


export const settings = {
    stops: [
        {id: 'HSL:1220127', type: 'bus'},
        {id: 'HSL:1220105', type: 'bus'},
        {id: 'HSL:1220403', type: 'tram'},
        {id: 'HSL:1220404', type: 'tram'}
    ],
    location: 'Helsinki',
    minArrivalMinutes: 5  // Minimum arrival time in minutes to display
}

export default settings
