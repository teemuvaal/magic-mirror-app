"use server"

export async function getMessage() {
    try {
        const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/getUpdates`, {
            cache: 'no-store', // Disable caching to always get fresh data
            next: { revalidate: 0 } // Disable Next.js cache
        });
        
        if (!res.ok) {
            throw new Error('Failed to fetch messages');
        }

        const data = await res.json();
        
        // Return all messages from the result array
        if (data.ok && data.result && Array.isArray(data.result)) {
            // Sort messages by date in descending order (newest first)
            const sortedMessages = data.result.sort((a, b) => b.message.date - a.message.date);
            return sortedMessages;
        }
        
        return [];
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}