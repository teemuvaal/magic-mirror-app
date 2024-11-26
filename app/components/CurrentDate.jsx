'use client'

export default function CurrentDate() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    return (
        <div className='text-2xl font-black'>
            {currentTime}
        </div>
    )
}