"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ZapIcon } from "lucide-react";

export default function ChatPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");
  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push("/sign-in");
    } else if (!sessionId) {
      router.push("/upload");
    }
  }, [isLoaded, isSignedIn, sessionId]);

  if (!isLoaded || !isSignedIn || !sessionId) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;
    if (!hasStarted) setHasStarted(true);

    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("session_id", sessionId);
    formData.append("input", input);

    try {
      const res = await fetch("https://documind-fastapi.onrender.com/chat/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const aiReply =
        data.answer?.trim() ||
        "⚠️ I couldn't find anything in your document. Please make sure embeddings were generated successfully.";

      setMessages((prev) => [...prev, { role: "assistant", content: aiReply }]);
      setInput("");
    } catch (err) {
      console.error("Error chatting with backend", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" p-6 max-w-4xl mx-auto h-screen  content-center">
      {!hasStarted && (
        <>
          <div className="flex justify-center mb-6">
            <div className="inline-flex px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <ZapIcon className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-8">
            <span>No more scrolling, just ask.</span>
          </h1>
        </>
      )}
      {/* Render chat messages */}
      <div className="my-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-900 text-right ml-auto max-w-[70%]"
                : "bg-gray-900 text-left mr-auto max-w-[70%]"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 px-3 py-2 rounded-2xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your document something..."
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 px-4 py-2 rounded-2xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
