"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { NavbarButton } from "./ui/resizable-navbar";

export function CTA() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleStartClick = () => {
    if (isSignedIn) {
      router.push("/upload");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text p-9 text-lg font-extrabold text-transparent sm:text-7xl text-center">
          Make your academic and professional life easier with <br />
          DocuMind
        </p>
      </div>
      <NavbarButton
        onClick={handleStartClick}
        variant="primary"
        className="text-lg"
      >
        Start for Free
      </NavbarButton>
    </div>
  );
}
