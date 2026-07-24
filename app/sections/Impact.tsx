"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { AnimatedCounter } from "@/app/components/AnimatedCounter";
import { impactMetrics, researchStats } from "@/app/lib/data";
import {
  CloudOff,
  Leaf,
  Package,
  Mountain,
  Users,
  Wind,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  CloudOff,
  Leaf,
  Package,
  Mountain,
};

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Measurable Results"
          title="Real Impact. Measurable Results."
          subtitle="Every kilogram of shell waste diverted is a kilogram of limestone left in the ground. Verified by ShellPass."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {impactMetrics.map((metric, index) => {
            const Icon = iconMap[metric.icon] || Leaf;
            const target = parseInt(metric.value.replace(/,/g, ""));
            return (
              <ScrollReveal key={metric.label} delay={index * 0.1}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-shell-200 hover:shadow-lg hover:shadow-shell-100/50 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-shell-100 text-shell-700 group-hover:bg-shell-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-shell-100 text-shell-700 text-xs font-bold">
                      {metric.change} {metric.changeLabel}
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-stone-900 mb-1">
                    <AnimatedCounter target={target} suffix={` ${metric.unit}`} />
                  </div>
                  <p className="text-sm text-stone-500 font-medium">{metric.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Secondary impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-shell-900 to-shell-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-shell-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-shell-700/50 flex items-center justify-center">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">Less Quarrying</h3>
                </div>
                <p className="text-shell-100 text-sm leading-relaxed mb-4">
                  Reduced pressure on limestone extraction. The construction sector accounts for{" "}
                  <span className="font-bold text-white">~27% of global CO₂ emissions</span>, with
                  ordinary Portland cement alone responsible for{" "}
                  <span className="font-bold text-white">7–8%</span>.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{researchStats.opcGlobalEmissions}</p>
                    <p className="text-xs text-shell-200">of global CO₂</p>
                  </div>
                  <div className="w-px h-10 bg-shell-700" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">{researchStats.cementCo2PerTonne}</p>
                    <p className="text-xs text-shell-200">CO₂ per tonne cement</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-ocean-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean-700/50 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">Healthier Communities</h3>
                </div>
                <p className="text-ocean-100 text-sm leading-relaxed mb-4">
                  Less dust, less odour, cleaner coastal areas. Unmanaged shell waste creates
                  sanitation issues and local pollution. Quarrying damages surrounding ecosystems
                  and creates respiratory health risks.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{researchStats.shellWasteAnnual}</p>
                    <p className="text-xs text-ocean-200">shell waste annually</p>
                  </div>
                  <div className="w-px h-10 bg-ocean-700" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">{researchStats.co2Reduction}</p>
                    <p className="text-xs text-ocean-200">CO₂ reduction possible</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
