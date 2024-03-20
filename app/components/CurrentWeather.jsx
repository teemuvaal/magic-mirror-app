'use client'
import { useEffect, useState } from "react"

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
    },[city]);
    if (loading) return <p>Loading...</p>
    if (!currentWeather) return <p>Error: No data found.</p>
    return (
        <div>
        <h1>
            {currentWeather.location.name}
        </h1>
        <h2>
            Temp: {currentWeather.current.temp_c}
        </h2>
        <h2>
            Feels like: {currentWeather.current.feelslike_c}
        </h2>
        </div>
    )
}