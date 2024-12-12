'use client'
import { useEffect, useState } from "react"
import { ThermometerSnowflake, ThermometerSun } from "lucide-react"

export default function CurrentDayWeather ({city}) {
    const [currentWeather,setCurrentWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!city) return;

        async function fetchData() {
            const response = await fetch(`/api/weather?city=${city}`);
            const data = await response.json();
            setCurrentWeather(data);
            setLoading(false);
        }

        fetchData();
        
        // Fetch new data every 15 minutes (900000 milliseconds)
        const interval = setInterval(fetchData, 900000);
        
        // Cleanup interval on unmount
        return () => clearInterval(interval);
    },[city]);
    
    if (loading) return <p>Loading...</p>
    if (!currentWeather) return <p>Error: No data found.</p>
    return (
        <div>
        <h1 className="text-2xl font-bold">
            {currentWeather.location.name}
        </h1>
        <div className="flex flex-row gap-4">
            Temp: {currentWeather.current.temp_c < 1 ? <ThermometerSnowflake /> : <ThermometerSun />} {currentWeather.current.temp_c}
        </div>
        <div className="flex flex-row gap-4">
            Feels like: {currentWeather.current.temp_c < 1 ? <ThermometerSnowflake /> : <ThermometerSun />}{currentWeather.current.feelslike_c}
        </div>
        </div>
    )
}