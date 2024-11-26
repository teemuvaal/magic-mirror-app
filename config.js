// Config is used to enter the desired stops, you can find id from HSL API for each stop
// Type is used to select correct icon to be displayed. If no type will default to "bus"
// TO-DO: Add more types to support ferries and trains
// TO-DO: Add support for live citybike status for nearby stations
export const stops = [
    {id: 'HSL:1220127', type: 'bus'},
    {id: 'HSL:1220105', type: 'bus'},
    {id: 'HSL:1220403', type: 'tram'},
    {id: 'HSL:1220404', type: 'tram'}
]