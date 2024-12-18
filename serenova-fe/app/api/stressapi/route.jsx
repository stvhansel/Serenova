
export async function GET(req) {

    const stressData = {
        score: 75, 
        date: '2024/11/11'
    };

    return new Response(JSON.stringify(stressData), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
