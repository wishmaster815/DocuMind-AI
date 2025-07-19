// import Hero from "@/components/Hero";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import Scroll from "@/components/Scroll";
import FAQ from "@/components/FAQ";
import ScrollBaseAnimation from "@/components/ui/text-marquee";
import { Workflow } from "@/components/Workflow";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-16">
        Access DocuMind anytime, anywhere.
      </h1>
      <Features />
      <Scroll />
      <Workflow />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
