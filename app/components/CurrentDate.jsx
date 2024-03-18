'use client'

export default function CurrentDate () {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    return (
        {currentDate}
    )
}