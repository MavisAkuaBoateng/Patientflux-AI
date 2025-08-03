"use client";
import { useState } from "react";
import axios from "axios";

export default function CheckInForm() {
  const [form, setForm] = useState({ name: "", age: "", category: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/checkin", form);
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: err.response?.data?.error || "Something went wrong" });
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-6 bg-white">
      <h2 className="text-lg font-bold mb-4">Patient Check-In</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="General OPD">General OPD</option>
          <option value="Emergency">Emergency</option>
          <option value="Specialist">Specialist</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Check In
        </button>
      </form>

      {response && (
        <div className="mt-4 text-sm">
          {response.error ? (
            <div className="text-red-500">{response.error}</div>
          ) : (
            <div className="text-green-600">✅ {response.message}</div>
          )}
        </div>
      )}
    </div>
  );
}
