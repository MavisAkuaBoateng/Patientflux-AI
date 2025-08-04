// File: app/api/ai/route.js

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch('http://91.108.112.45:4000/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer sk-hZrLR2IIKDrOHKW2B4nIsQ`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'groq/deepseek-r1-distill-llama-70b',
        messages: body.messages
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong with LiteLLM' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
