'use client'

export default function CurrentDate () {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    return (
        <div className='text-2xl font-black'>
        {currentDate}
        </div>
    )
}