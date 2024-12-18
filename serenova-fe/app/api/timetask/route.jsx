export async function GET(req) {
    const taskData = [
        {
            id: 1,
            name: "Morning Exercise",
            date: {
                year: 2024,
                month: 10,
                day: 1
            },
            time: "08:00 AM",
            duration: "1 hour", 
        },
        {
            id: 2,
            name: "Team Meeting",
            date: {
                year: 2024,
                month: 10,
                day: 2
            },
            time: "10:00 AM",
            duration: "2 hours", 
        },
        {
            id: 3,
            name: "Project Work",
            date: {
                year: 2024,
                month: 10,
                day: 3
            },
            time: "01:00 PM",
            duration: "3 hours", 
        },
        {
            id: 4,
            name: "Evening Walk",
            date: {
                year: 2024,
                month: 10,
                day: 4
            },
            time: "06:00 PM",
            duration: "30 minutes", 
        },
        
        {
            id: 5,
            name: "Yoga Class",
            date: {
                year: 2024,
                month: 9,
                day: 25
            },
            time: "07:30 AM",
            duration: "1 hour", 
        },
        {
            id: 6,
            name: "Client Presentation",
            date: {
                year: 2024,
                month: 9,
                day: 26
            },
            time: "03:00 PM",
            duration: "2 hours", // Added duration
        },
        {
            id: 7,
            name: "Dinner with Family",
            date: {
                year: 2024,
                month: 9,
                day: 27
            },
            time: "07:00 PM",
            duration: "1.5 hours", 
        },
    ];

    return new Response(JSON.stringify(taskData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
