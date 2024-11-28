'use client'
import { useState, useEffect } from 'react';

export default function CurrentTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('fi-FI', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }));

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString('fi-FI', {
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false
            }));
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className='text-4xl font-black'>
            {time}
        </div>
    )
}