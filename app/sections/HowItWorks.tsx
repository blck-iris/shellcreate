"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { processingSteps } from "@/app/lib/data";
import {
  Shell,
  Droplets,
  Package,
  Building2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Shell,
  Droplets,
  Package,
  Building2,
  ClipboardCheck,
};

export function HowItWorks() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Process"
          title="How the ShellCrete System Works"
          subtitle="From waste stream to construction material — a closed-loop system powered by ShellPass traceability."
        />

        <div className="relative mt-16">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-shell-200 via-shell-300 to-shell-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {processingSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Shell;
              return (
                <ScrollReveal key={step.step} delay={index * 0.1}>
                  <div className="relative group">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-shell-200 text-shell-700 shadow-lg shadow-shell-100 group-hover:border-shell-400 group-hover:shadow-shell-200/50 transition-all duration-300 mb-6">
                        <Icon className="w-7 h-7" />
                      </div>

                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-shell-700 text-white text-xs font-bold mb-3">
                        {step.step}
                      </div>

                      <h3 className="text-base font-bold text-stone-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-stone-500 leading-relaxed max-w-[220px]">
                        {step.description}
                      </p>
                    </div>

                    {index < processingSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <ArrowRight className="w-5 h-5 text-shell-300 rotate-90" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
