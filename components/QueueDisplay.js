"use client";

import { useEffect, useState } from "react";

export default function QueueDisplay() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/checkin")
        .then((res) => res.json())
        .then((data) => setPatients(data));
    }, 2000); // Refresh every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📝 Current Queue</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} className="mb-2 border-b pb-1">
            {patient.name} – {patient.category}
          </li>
        ))}
        {patients.length === 0 && (
          <li className="text-gray-500">No patients in queue</li>
        )}
      </ul>
    </div>
  );
}
