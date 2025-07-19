import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import Scroll from "@/components/Scroll";
import FAQ from "@/components/FAQ";
import { Workflow } from "@/components/Workflow";
import { CTA } from "@/components/CTA";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Scroll />
      <Workflow />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
