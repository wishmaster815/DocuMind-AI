import React from "react";
import ScrollBaseAnimation from "./ui/text-marquee";

function index() {
  return (
    <>
      <div className="h-[500px] grid place-content-center">
        <ScrollBaseAnimation
          baseVelocity={1}
          scrollDependent={true}
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          Ask Questions • Get Instant Answers • Summarize PDFs • Chat with
          Documents
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          baseVelocity={-1}
          scrollDependent={true}
          clasname="font-bold tracking-[-0.07em] leading-[90%]"
        >
          AI-Powered PDF Assistant • Research Faster • Extract Key Insights
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default index;
