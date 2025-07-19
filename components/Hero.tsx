import { cn } from "@/lib/utils";
import React from "react";

export function Hero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className=" flex flex-col">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text p-9 text-lg font-extrabold text-transparent sm:text-7xl text-center ">
          Understand Your PDFs <br /> in Seconds with AI
        </p>
        <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text p-9 text-lg font-bold text-transparent sm:text-3xl text-center">
          Why read everything when DocuMind can just tell you?
          <br />
          Ask questions, summarize, and extract insights without lifting a
          paragraph.
        </p>
      </div>
    </div>
  );
}
