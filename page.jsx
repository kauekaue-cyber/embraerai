"use client";
import { useState } from "react";

export default function Home() {
  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);
  const [loading,setLoading] = useState(false);

  async function sendMessage() {
    if(!input.trim()) return;
    const userMsg = { role:"user", content: input };
    setMessages([...messages, userMsg]);
    setLoading(true);
    setInput("");

    const res = await fetch("/api/chat",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages(m=>[...m, { role:"assistant", content:data.reply }]);
    setLoading(false);
  }

  return (
    <main style={{ padding:"40px", maxWidth:"700px", margin:"0 auto" }}>
      <h1 style={{ color:"#0055a5" }}>Embraer AI</h1>
      <p>Ask anything about Embraer.</p>

      <div style={{ marginTop:"20px" }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ margin:"10px 0" }}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
        {loading && <div>Loading...</div>}
      </div>

      <div style={{ marginTop:"20px", display:"flex", gap:"10px" }}>
        <input 
          style={{ flex:1, padding:"10px", border:"1px solid #ccc" }}
          value={input} onChange={e=>setInput(e.target.value)} 
          placeholder="Ask something..."
        />
        <button 
          onClick={sendMessage}
          style={{ padding:"10px 20px", background:"#0055a5", color:"#fff", border:"none" }}>
          Send
        </button>
      </div>
    </main>
  );
}
