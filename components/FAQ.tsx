import React from "react";
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from "./ui/accordian";

const accordionData = [
  {
    header: "What is DocuMind?",
    panel:
      "DocuMind is an AI-powered assistant that allows you to upload PDF documents and interact with them using natural language. Ask questions, extract information, and summarize content instantly.",
  },
  {
    header: "How does DocuMind work?",
    panel:
      "DocuMind uses advanced language models to process the content of your uploaded PDF, generate embeddings, and answer questions accurately in real-time. It also remembers your context across chats for a smoother experience.",
  },
  {
    header: "Is my uploaded data secure?",
    panel:
      "Yes, your documents are securely processed and handled in compliance with GDPR standards. We never share or misuse your uploaded files.",
  },
  {
    header: "Can I upload scanned or image-based PDFs?",
    panel:
      "Currently, DocuMind supports text-based PDFs. Support for scanned or image-based PDFs with OCR (Optical Character Recognition) is coming soon.",
  },
  {
    header: "Can I use DocuMind for legal, academic, or financial documents?",
    panel:
      "Absolutely. DocuMind is designed to handle complex documents across various fields including legal, academic research, finance, and corporate materials.",
  },
  {
    header: "Is there a file size or page limit?",
    panel:
      "DocuMind handles most standard PDFs efficiently. For best performance, we recommend uploading files under 100 pages. Support for larger documents will be added soon.",
  },
  {
    header: "What makes DocuMind different from ChatGPT?",
    panel:
      "Unlike general-purpose chatbots, DocuMind is focused solely on your PDF content. It extracts insights directly from your files, ensuring highly relevant and context-specific answers.",
  },
  {
    header: "Can I use DocuMind without signing up?",
    panel:
      "You can explore limited functionality without an account. For full access — including chat history, advanced features, and more — you’ll need to sign up using Clerk authentication.",
  },
];

const baseTextClass = "2xl:text-base text-sm";

function FAQ() {
  return (
    <div className="container mx-auto p-10" id="faq">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-16">
        Frequently Asked Questions
      </h1>
      <AccordionContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1].map((col) => (
          <AccordionWrapper key={col}>
            <Accordion defaultValue={`item-${col * 3 + 1}`}>
              {accordionData.slice(col * 3, col * 3 + 3).map((item, idx) => {
                const value = `item-${col * 3 + idx + 1}`;
                return (
                  <AccordionItem key={value} value={value}>
                    <AccordionHeader className={baseTextClass}>
                      {item.header}
                    </AccordionHeader>
                    <AccordionPanel className={baseTextClass}>
                      {item.panel}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </AccordionWrapper>
        ))}
      </AccordionContainer>
    </div>
  );
}

export default FAQ;
