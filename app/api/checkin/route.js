// app/api/checkin/route.js
let queue = [];

export async function POST(req) {
  const body = await req.json();
  const { name, age, symptoms } = body;

  const patient = {
    id: Date.now(),
    name,
    age,
    symptoms,
    checkInTime: new Date().toISOString(),
  };

  queue.push(patient);

  return new Response(JSON.stringify({ message: "Patient checked in", patient }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET() {
  return new Response(JSON.stringify(queue), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
