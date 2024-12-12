'use client'

import { getMessage } from "../actions"
import { useEffect, useState } from 'react'

export default function MessageBox() {
    const [latestMessage, setLatestMessage] = useState(null);

    async function fetchMessages() {
        const messages = await getMessage();
        // Get only the first message (latest one, since they're sorted)
        setLatestMessage(messages[0] || null);
    }

    useEffect(() => {
        fetchMessages();
        
        // Refresh messages every 60 seconds
        const interval = setInterval(fetchMessages, 60000);
        
        return () => clearInterval(interval);
    }, []);

    if (!latestMessage) {
        return (
            <div className='flex flex-col items-center justify-center border-2 border-white rounded-lg p-5 w-1/3'>
                <p>No message available</p>
            </div>
        );
    }

    return (
        <div className='flex flex-col p-5 w-full'>
            <div className='w-full'>
                <div className='bg-zinc-900 p-3 rounded-lg'>
                    <p className='text-sm text-gray-400'>
                        {new Date(latestMessage.message.date * 1000).toLocaleString()}
                    </p>
                    <p className='mt-1 text-2xl'>{latestMessage.message.text}</p>
                </div>
            </div>
        </div>
    );
}