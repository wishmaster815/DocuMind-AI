import { cn } from "@/lib/utils";
import {
  IconBrain,
  IconBrandZapier,
  IconCode,
  IconMessageCircleQuestion,
  IconNotes,
  IconShieldCheck,
  IconTerminal2,
  IconUsers,
} from "@tabler/icons-react";

const features = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Ask Anything",
    description:
      "Whether it's a summary or a specific clause — just ask. DocuMind gives you the exact info from your PDFs.",
    icon: <IconMessageCircleQuestion />,
  },
  {
    title: "Contextual Memory",
    description:
      "Your conversation evolves. DocuMind remembers what you asked earlier and keeps the context flowing.",
    icon: <IconBrain />,
  },
  {
    title: "Lightning-Fast Answers",
    description:
      "Powered by Groq LLM, DocuMind delivers real-time answers without lag — even for large documents.",
    icon: <IconBrandZapier />,
  },
  {
    title: "Private by Design",
    description:
      "Data privacy comes first. All files and chats are processed securely with GDPR compliance.",
    icon: <IconShieldCheck />,
  },
  {
    title: "Built for Teams",
    description:
      "Collaborate seamlessly across your team — whether you're analyzing contracts or discussing reports.",
    icon: <IconUsers />,
  },
  {
    title: "Intelligent Summaries",
    description:
      "Don’t just search, understand. Get AI-generated summaries that make sense instantly.",
    icon: <IconNotes />,
  },
  {
    title: "Developer-Friendly API",
    description:
      "Integrate DocuMind into your tools and workflows with robust APIs for automation and scaling.",
    icon: <IconCode />,
  },
];

export function Features() {
  return (
    <section id="features">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-16">
        Access DocuMind anytime, anywhere.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-amber-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
