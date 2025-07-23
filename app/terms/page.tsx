import React from "react";
import { termsContent } from "@/data";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-50 ">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-10">
        Terms & Conditions
      </h1>
      <p className="text-lg text-center bg-gradient-to-b  bg-clip-text text-transparent from-neutral-200 to-neutral-500 mb-10">
        Last Updated: July 17, 2025
      </p>
      <section>
        {termsContent.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-4xl font-semibold mb-2">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside  space-y-1">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-xl">{section.content}</p>
            )}
          </section>
        ))}
      </section>
    </div>
  );
};

export default page;
