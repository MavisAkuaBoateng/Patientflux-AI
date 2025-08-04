'use client';
import { useState } from 'react';

export default function AIAssistant() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: input }
          ]
        })
      });

      const data = await res.json();

      if (res.ok) {
        const aiMessage = data.choices?.[0]?.message?.content || 'No response';
        setResponse(aiMessage);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to AI server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
      
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Ask a question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {response && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <strong>AI:</strong> {response}
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
