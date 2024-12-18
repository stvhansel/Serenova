// pages/api/historycheck.js

export async function GET(req) {
    const historyData = [
        { date: '2024-09-30', points: 75 },
        { date: '2024-10-01', points: 60 },
        { date: '2024-10-02', points: 45 },
        { date: '2024-10-03', points: 80 },
        { date: '2024-10-04', points: 55 },
        { date: '2024-10-05', points: 90 },
    ];

    return new Response(JSON.stringify(historyData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
