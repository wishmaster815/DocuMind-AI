// app/terms/page.tsx (or wherever your route is)

import React from "react";

// termsContent.ts

export const termsContent = [
  {
    title: "1. About Our Service",
    content:
      "DocuMind, operated by Proton Labs, provides AI-powered tools to analyze and interact with PDF documents. The service is accessible through our web platform and Chrome extension.",
  },
  {
    title: "2. User Eligibility",
    content:
      "You must be at least 13 years old to use this service. If under 18, parental or guardian consent is required.",
  },
  {
    title: "3. User Accounts",
    content:
      "Users may register using email or third-party services like Google or Clerk. Keep your credentials secure — you are responsible for your account activity.",
  },
  {
    title: "4. Payments & Subscriptions",
    content:
      "DocuMind offers both free and paid plans. Payments are handled via secure third-party processors. You may cancel anytime; current billing charges apply.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All platform content and branding belong to Proton Labs. You may not copy, resell, or exploit any part of the Service without prior written consent.",
  },
  {
    title: "6. User-Generated Content",
    content:
      "You retain ownership of any PDFs or content uploaded. By using the Service, you grant DocuMind permission to process and analyze the content via AI models.",
  },
  {
    title: "7. Prohibited Use",
    content: [
      "Uploading illegal or harmful material",
      "Infringing upon intellectual property",
      "Reverse-engineering or misusing the platform",
    ],
  },
  {
    title: "8. Data & Privacy",
    content:
      "All data is handled according to our Privacy Policy. By using DocuMind, you agree to our data processing practices.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "The Service is provided “as-is.” We’re not liable for any indirect losses, data issues, or service interruptions.",
  },
  {
    title: "10. Termination",
    content:
      "We may suspend or terminate your access if you violate these Terms or applicable laws.",
  },
  {
    title: "11. Governing Law",
    content:
      "These Terms are governed by the laws of England and Wales. Disputes will first go through informal resolution, then arbitration if necessary.",
  },
  {
    title: "Contact",
    content: "For questions, contact us at support@documind.com",
  },
];

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
