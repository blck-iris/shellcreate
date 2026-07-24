"use client";

import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { researchPapers, researchStats } from "@/app/lib/data";
import { BookOpen, ExternalLink, FlaskConical, BarChart3, Beaker } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Science-Backed"
          title="Research & Evidence"
          subtitle="ShellCrete is grounded in peer-reviewed research. Here is what the science says about shell-based construction materials."
        />

        {/* Key stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-12">
          {[
            { icon: Beaker, label: "CaCO₃ Content", value: researchStats.calciumCarbonateContent },
            { icon: BarChart3, label: "Optimal Replacement", value: researchStats.optimalCementReplacement },
            { icon: FlaskConical, label: "Strength at 40%", value: researchStats.compressiveStrengthAt40 },
            { icon: BookOpen, label: "CO₂ Reduction", value: researchStats.co2Reduction },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.05}>
              <div className="bg-white rounded-xl p-5 border border-stone-200 text-center">
                <stat.icon className="w-6 h-6 text-shell-600 mx-auto mb-2" />
                <p className="text-xl font-bold text-stone-900">{stat.value}</p>
                <p className="text-xs text-stone-500 mt-1">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Research papers */}
        <div className="space-y-4">
          {researchPapers.map((paper, index) => (
            <ScrollReveal key={paper.title} delay={index * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-shell-300 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-shell-50 text-shell-700 text-[10px] font-bold uppercase tracking-wider border border-shell-200">
                        {paper.journal}
                      </span>
                      <span className="text-xs text-stone-400">{paper.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed mb-3">
                      <span className="font-semibold text-shell-700">Key finding:</span>{" "}
                      {paper.keyFinding}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span className="font-medium">{paper.citation}</span>
                      <span className="text-stone-300">|</span>
                      <span>DOI: {paper.doi}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-shell-700 bg-shell-50 hover:bg-shell-100 border border-shell-200 rounded-lg transition-colors"
                  >
                    View Paper
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-shell-700 hover:bg-shell-800 rounded-xl transition-colors shadow-lg shadow-shell-700/20"
          >
            Explore Full Research Library
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
