'use client'

import React, { useEffect, useState } from 'react'

type Patient = {
  id: string
  name: string
  age: number
  category: string
  checkin_time: string
  status: string
}

export default function QueuePage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await fetch('/api/queue')
        if (!res.ok) throw new Error('Failed to fetch patient queue')
        const data = await res.json()
        setPatients(data)
      } catch (err: any) {
        console.error('Error:', err)
        setError('Could not load patient queue.')
      } finally {
        setLoading(false)
      }
    }

    fetchQueue()
  }, [])

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🩺 Patient Queue</h1>

      {loading ? (
        <p>Loading patient queue...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : patients.length === 0 ? (
        <p>No patients in the queue.</p>
      ) : (
        <ul className="space-y-4">
          {patients.map((patient) => (
            <li key={patient.id} className="border p-4 rounded shadow bg-white">
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Category:</strong> {patient.category}</p>
              <p><strong>Status:</strong> {patient.status}</p>
              <p><strong>Check-In Time:</strong> {new Date(patient.checkin_time).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
