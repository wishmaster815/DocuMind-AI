"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/ui/file-upload";
import { NavbarButton } from "@/components/ui/resizable-navbar";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const router = useRouter();

  const handleFileUpload = async (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
    if (uploadedFiles.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
      const data = await response.json();
      setSessionId(data.session_id); // Store session ID for later use
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-screen p-6 flex flex-col justify-center text-center">
      <div className="text-2xl font-bold mb-4">Upload your PDFs</div>

      <div className="min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
        <FileUpload onChange={handleFileUpload} />
      </div>

      {isUploading && (
        <p className="mt-4 text-blue-500">Uploading & processing PDFs...</p>
      )}

      {sessionId && (
        <div className="mt-6">
          <p className="mb-2 text-green-600">PDFs processed successfully!</p>
          <NavbarButton
            onClick={() => router.push(`/chat?session=${sessionId}`)}
          >
            Start Asking Questions
          </NavbarButton>
        </div>
      )}
    </div>
  );
}
