import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
}
