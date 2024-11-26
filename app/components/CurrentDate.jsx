'use client'

export default function CurrentDate() {
    const now = new Date();
    const currentDate = now.toLocaleDateString('fi-FI', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className='text-2xl font-black'>
            {currentDate}
        </div>
    )
}