// app/api/ai/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { messages } = await req.json();

  try {
    const response = await fetch("http://91.108.112.45:4000/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.LITELLM_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.LITELLM_MODEL, // e.g., groq/llama3-8b-8192
        messages: messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("LiteLLM error:", data);
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("Server error calling LiteLLM:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
