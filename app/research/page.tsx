import type { Metadata } from "next";
import { researchPapers, researchStats } from "@/app/lib/data";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import {
  BookOpen,
  ExternalLink,
  FlaskConical,
  BarChart3,
  Beaker,
  Microscope,
  FileText,
  Award,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research — Peer-Reviewed Evidence for Shell-Based Construction",
  description:
    "Explore the scientific literature supporting shell-based concrete materials. Peer-reviewed studies on compressive strength, CO₂ reduction, and calcium carbonate substitution.",
};

const keyFindings = [
  {
    icon: Beaker,
    title: "Calcium Carbonate Content",
    value: "~98%",
    description: "Waste oyster shell powder (WOSP) contains approximately 98% CaCO₃, chemically similar to limestone used in cement production.",
    source: "TechScience / SDHM, 2025",
  },
  {
    icon: BarChart3,
    title: "Optimal Replacement Range",
    value: "5–15%",
    description: "Peer-reviewed studies consistently find that 5–15% cement replacement with shell powder shows no significant difference in compressive strength vs. control mixes.",
    source: "Yang et al., Buildings (MDPI), 2023",
  },
  {
    icon: FlaskConical,
    title: "Strength at High Replacement",
    value: "30 MPa at 40%",
    description: "At 40% fine aggregate replacement with oyster shell, concrete achieves 30 MPa compressive strength — meeting building standards for non-structural applications.",
    source: "Hong et al., PMC / NCBI, 2024",
  },
  {
    icon: Microscope,
    title: "CO₂ Emission Reduction",
    value: "Up to 36%",
    description: "Replacing cement with seashell powder reduced CO₂ emissions by up to 36% in laboratory testing, with strength remaining comparable at 15% replacement.",
    source: "Construction Materials Journal, 2025",
  },
  {
    icon: Award,
    title: "Enhanced Durability",
    value: "Improved",
    description: "Shell-based concrete shows improved freeze-thaw resistance and reduced water absorption. The modified pore structure enhances long-term durability.",
    source: "Multiple studies, 2023–2025",
  },
  {
    icon: FileText,
    title: "Waste Volume",
    value: "10–20M tonnes/year",
    description: "The global seafood industry generates an estimated 10–20 million tonnes of shell waste annually — an underutilised calcium carbonate resource.",
    source: "Academia.edu Review, 2024",
  },
];

const methodologyNotes = [
  {
    title: "Shell Preparation",
    points: [
      "Shells are thoroughly cleaned to remove organic matter and contaminants",
      "Dried at controlled temperatures to prevent decomposition",
      "Crushed and graded into powder (<75μm) or granules (2–5mm)",
      "Calcium carbonate content verified via XRD and chemical analysis",
    ],
  },
  {
    title: "Mix Design",
    points: [
      "Partial substitution of cement or fine aggregate (not complete replacement)",
      "Replacement ratios typically 5%, 10%, 15%, 20%, 30%, and 40%",
      "Water-to-cement ratio adjusted to maintain workability",
      "Standard curing conditions: 20°C, 95% RH for 28 days",
    ],
  },
  {
    title: "Testing Protocol",
    points: [
      "Compressive strength tested at 7, 14, and 28 days (ASTM C39)",
      "Splitting tensile strength (ASTM C496)",
      "Water absorption and permeability testing",
      "Freeze-thaw durability cycles (ASTM C666)",
      "Microstructural analysis via SEM and XRD",
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-shell-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Scientific Foundation"
            title="Research & Evidence"
            subtitle="ShellCrete is not a concept — it is a material solution grounded in peer-reviewed science. Every claim is backed by published research."
            align="left"
          />
        </div>
      </section>

      {/* Key Findings Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Key Findings"
            title="What the Science Says"
            subtitle="Six critical findings from the peer-reviewed literature on shell-based construction materials."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {keyFindings.map((finding, index) => (
              <ScrollReveal key={finding.title} delay={index * 0.08}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-shell-300 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-shell-100 text-shell-700 flex items-center justify-center mb-4">
                    <finding.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-1">{finding.title}</h3>
                  <p className="text-2xl font-extrabold text-stone-900 mb-3">{finding.value}</p>
                  <p className="text-sm text-stone-600 leading-relaxed flex-1">{finding.description}</p>
                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <p className="text-[10px] text-stone-400 font-medium">Source: {finding.source}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Literature Review"
            title="Peer-Reviewed Papers"
            subtitle="The foundational research supporting ShellCrete's material claims and environmental benefits."
          />

          <div className="space-y-4 mt-8">
            {researchPapers.map((paper, index) => (
              <ScrollReveal key={paper.title} delay={index * 0.06}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-shell-300 hover:shadow-md transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-shell-50 text-shell-700 text-[10px] font-bold uppercase tracking-wider border border-shell-200">
                          {paper.journal}
                        </span>
                        <span className="text-xs text-stone-400 font-medium">{paper.year}</span>
                        <span className="text-xs text-stone-300">|</span>
                        <span className="text-xs text-stone-400 font-mono">DOI: {paper.doi}</span>
                      </div>
                      <h3 className="text-base font-bold text-stone-900 mb-3 leading-snug">
                        {paper.title}
                      </h3>
                      <div className="bg-shell-50 rounded-lg p-4 border border-shell-100 mb-3">
                        <p className="text-sm text-stone-700 leading-relaxed">
                          <span className="font-bold text-shell-800">Key Finding:</span>{" "}
                          {paper.keyFinding}
                        </p>
                      </div>
                      <p className="text-xs text-stone-400 font-medium">{paper.citation}</p>
                    </div>
                    <a
                      href="#"
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-shell-700 bg-shell-50 hover:bg-shell-100 border border-shell-200 rounded-lg transition-colors"
                    >
                      View Paper
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Methodology"
            title="How ShellCrete Materials Are Verified"
            subtitle="Our testing and quality assurance protocols follow established ASTM and industry standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {methodologyNotes.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 h-full">
                  <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-shell-600" />
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-shell-400 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Banner */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-shell-900 to-shell-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <BookOpen className="w-10 h-10 text-shell-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Want to dive deeper?</h2>
              <p className="text-shell-100 leading-relaxed mb-6 max-w-xl mx-auto">
                Our full research library includes over 20 peer-reviewed papers on shell-based construction materials,
                life cycle assessments, and circular economy frameworks.
              </p>
              <a
                href="mailto:research@shellcrete.io"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-shell-900 bg-white hover:bg-shell-50 rounded-xl transition-colors"
              >
                Request Research Access
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
