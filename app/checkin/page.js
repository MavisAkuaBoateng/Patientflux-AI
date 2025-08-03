"use client";
import { useState } from "react";
import axios from "axios";

export default function CheckInPage() {
  const [form, setForm] = useState({ name: "", age: "", category: "new" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/checkin", form);
      setSuccess(true);
      setForm({ name: "", age: "", category: "new" });
    } catch (error) {
      console.error("Check-in failed:", error);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Patient Check-In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          className="w-full border rounded p-2"
        />
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full border rounded p-2"
        >
          <option value="new">New</option>
          <option value="follow-up">Follow-Up</option>
          <option value="post-op">Post-Op</option>
          <option value="high-risk">High Risk</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Check In
        </button>
      </form>
      {success && <p className="text-green-600 mt-2">Check-in successful!</p>}
    </div>
  );
}
