import React, { useState } from 'react';

const ThreeKingdomsChatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! You can ask me anything about the Three Kingdoms period of Chinese history.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(msgs => [...msgs, userMessage]);
    setLoading(true);
    setInput('');

    // Now using local proxy backend (no API key in frontend)
    try {
      // Use the backend proxy (Hugging Face) instead of OpenAI directly
      const systemPrompt = { role: "system", content: "You are a helpful historian assistant. Only answer questions about the Three Kingdoms period of Chinese history. If asked about anything else, politely refuse." };
      const chatMessages = [
        systemPrompt,
        ...messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
        { role: "user", content: input }
      ];
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: chatMessages })
      });
      if (!response.ok) throw new Error("Failed to fetch AI response");
      const data = await response.json();
      const aiText = data.reply || "(No response)";
      setMessages(msgs => [
        ...msgs,
        { sender: 'bot', text: aiText }
      ]);
    } catch (err) {
      setMessages(msgs => [
        ...msgs,
        { sender: 'bot', text: "Sorry, there was an error contacting the AI service." }
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container" style={{ maxWidth: 600, margin: '30px auto', background: '#f5f1e6', borderRadius: 18, padding: 24, border: '1.5px solid #e5d3a1', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Three Kingdoms AI Chatbot</h2>
      <div className="chatbot-messages" style={{ minHeight: 180, marginBottom: 18, padding: 8, background: '#fff8e1', borderRadius: 12, border: '1px solid #e5d3a1', maxHeight: 300, overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', margin: '8px 0' }}>
            <span style={{
              display: 'inline-block',
              background: msg.sender === 'bot' ? '#e5d3a1' : '#c3e6cb',
              color: '#333',
              padding: '8px 14px',
              borderRadius: 18,
              maxWidth: '80%',
              fontSize: '1.05rem'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div style={{ color: '#aaa', textAlign: 'left', margin: '8px 0' }}>AI is thinking...</div>}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          placeholder="Ask about the Three Kingdoms..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ flex: 1, padding: '10px 14px', borderRadius: 16, border: '1px solid #e5d3a1', fontSize: '1.05rem' }}
          disabled={loading}
        />
        <button type="submit" className="scroll-btn" disabled={loading || !input.trim()} style={{ borderRadius: 16, padding: '0 18px' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ThreeKingdomsChatbot;
