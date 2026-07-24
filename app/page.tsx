import { Hero } from "@/app/sections/Hero";
import { HowItWorks } from "@/app/sections/HowItWorks";
import { Products } from "@/app/sections/Products";
import { Impact } from "@/app/sections/Impact";
import { Research } from "@/app/sections/Research";
import { ShellPassPreview } from "@/app/sections/ShellPassPreview";
import { CTA } from "@/app/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Products />
      <Impact />
      <Research />
      <ShellPassPreview />
      <CTA />
    </>
  );
}
