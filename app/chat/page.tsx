import { Suspense } from "react";
import ChatPage from "./ChatPage";

export default function ChatWrapper() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading chat...</div>}>
      <ChatPage />
    </Suspense>
  );
}
