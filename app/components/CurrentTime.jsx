'use client'
import { useState, useEffect } from 'react';

export default function CurrentTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('fi-FI'));

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString('fi-FI'));
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className='text-2xl font-black'>
            {time}
        </div>
    )
}