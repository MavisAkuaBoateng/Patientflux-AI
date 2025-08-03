// app/api/checkin/route.js
import { NextResponse } from "next/server";

// Temporary in-memory database (swap with Supabase/Prisma later)
let db = [];

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, age, category } = body;

    // Basic validation
    if (!name || !age || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newPatient = {
      id: Date.now().toString(),
      name: name.trim(),
      age: parseInt(age),
      category,
      checkin_time: new Date().toISOString(),
      status: "waiting", // Initial queue state
    };

    db.push(newPatient);
    console.log("✅ New patient checked in:", newPatient);

    return NextResponse.json(
      { message: "Patient successfully checked in", patient: newPatient },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Server error during check-in:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
