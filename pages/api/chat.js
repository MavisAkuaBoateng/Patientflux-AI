export default async function handler(req, res) {
  try {
    const response = await fetch('http://91.108.112.45:4000/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer sk-hZrLR2IIKDrOHKW2B4nIsQ`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'groq/deepseek-r1-distill-llama-70b',  
        messages: req.body.messages
      })
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong with LiteLLM' });
  }
}
