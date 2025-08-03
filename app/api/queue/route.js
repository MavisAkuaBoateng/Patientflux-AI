// app/api/queue/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const urgencyOrder = {
  'high-risk': 1,
  emergency: 2,
  'post-op': 3,
  'follow-up': 4,
  general: 5,
};

const dataFile = path.join(process.cwd(), 'data', 'patients.json');

export async function GET() {
  try {
    const fileData = fs.readFileSync(dataFile, 'utf-8');
    const patients = JSON.parse(fileData);

    const sortedPatients = patients
      .filter(p => p.status !== 'done') // optional: remove completed
      .sort((a, b) => {
        const urgencyA = urgencyOrder[a.category] || 99;
        const urgencyB = urgencyOrder[b.category] || 99;
        if (urgencyA !== urgencyB) return urgencyA - urgencyB;
        return new Date(a.checkin_time) - new Date(b.checkin_time);
      });

    return NextResponse.json(sortedPatients);
  } catch (err) {
    console.error('Error reading patient queue:', err);
    return NextResponse.json({ error: 'Failed to load queue' }, { status: 500 });
  }
}
