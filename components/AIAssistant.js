"use client";
import { useState } from "react";
import axios from "axios";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/ai", { question });
      setAnswer(res.data.output);
    } catch (err) {
      setAnswer("Error: Could not reach AI assistant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-6 bg-white">
      <h2 className="text-lg font-bold mb-2">AI Assistant</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
        placeholder="Ask something about OPD or procedures..."
        className="w-full p-2 border rounded"
      />
      <button
        onClick={askAI}
        className="mt-2 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && <p className="mt-4 text-sm text-gray-800">{answer}</p>}
    </div>
  );
}
