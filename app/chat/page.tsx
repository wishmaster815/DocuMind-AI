"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("session_id", sessionId);
    formData.append("input", input);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat/", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer },
      ]);
      setInput("");
    } catch (err) {
      console.error("Error chatting with backend", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-40  p-6 max-w-4xl mx-auto">
      <div className="space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-950 text-right"
                : "bg-green-950 text-left"
            }`}
          >
            <ReactMarkdown>
              {msg.role === "user"
                ? `**You:** ${msg.content}`
                : `**AI:** ${msg.content}`}
            </ReactMarkdown>
          </div>
        ))}
        {isLoading && <p className="text-gray-400 italic">Thinking...</p>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 px-3 py-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your document something..."
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600  px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
