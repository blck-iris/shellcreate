import type { Metadata } from "next";
import { processingSteps, wasteSources } from "@/app/lib/data";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import {
  Shell,
  Droplets,
  Package,
  Building2,
  ClipboardCheck,
  ArrowRight,
  Truck,
  Factory,
  HardHat,
  Recycle,
  DollarSign,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — The ShellCrete System",
  description:
    "Learn how ShellCrete transforms discarded shells into sustainable construction materials through a 5-step process powered by ShellPass digital traceability.",
};

const iconMap: Record<string, React.ElementType> = {
  Shell,
  Droplets,
  Package,
  Building2,
  ClipboardCheck,
};

const ecosystem = [
  {
    role: "Shell Waste Producers",
    icon: Recycle,
    description: "Restaurants, seafood markets, bakeries, egg processors, households, and coastal communities provide shell waste.",
    benefit: "Receive free collection or small payment for waste that would otherwise be dumped.",
  },
  {
    role: "Processors",
    icon: Factory,
    description: "Clean, dry, crush, and grade shells into powder or granules rich in calcium carbonate (~98% CaCO₃).",
    benefit: "New revenue stream from waste valorisation. Verified supply chain via ShellPass.",
  },
  {
    role: "Product Manufacturers",
    icon: HardHat,
    description: "Concrete, brick, tile, and paving block producers use processed shell material as partial substitute.",
    benefit: "Lower material costs, greener product credentials, access to sustainability markets.",
  },
  {
    role: "Construction & Developers",
    icon: Building2,
    description: "Construction companies, developers, NGOs, and government projects use ShellCrete products.",
    benefit: "Verified green building materials with digital material passports for ESG reporting.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-shell-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Process"
            title="How the ShellCrete System Works"
            subtitle="From waste stream to construction material — a closed-loop system powered by ShellPass traceability and verified by science."
            align="left"
          />
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processingSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Shell;
              return (
                <ScrollReveal key={step.step} delay={0.1}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-shell-700 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-shell-700/20">
                        {step.step}
                      </div>
                      <div className="md:hidden">
                        <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-6 border border-stone-200">
                      <div className="hidden md:flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-shell-600" />
                        <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
                      </div>
                      <p className="text-stone-600 leading-relaxed">{step.description}</p>

                      {step.step === 1 && (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {wasteSources.map((source) => (
                            <div key={source.name} className="flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-lg text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-shell-400" />
                              <span className="text-stone-600 font-medium">{source.name}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.step === 2 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Cleaned", "Dried", "Crushed", "Graded", "~98% CaCO₃"].map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-semibold text-shell-700 bg-shell-50 rounded-full border border-shell-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {step.step === 3 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Paving Blocks", "Bricks", "Tiles", "Precast Panels", "10–40% Substitution"].map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs font-semibold text-ocean-700 bg-ocean-50 rounded-full border border-ocean-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {step.step === 5 && (
                        <div className="mt-4 p-4 bg-shell-50 rounded-xl border border-shell-200">
                          <p className="text-sm text-shell-800 font-medium mb-2">ShellPass records:</p>
                          <ul className="space-y-1 text-xs text-stone-600">
                            <li className="flex items-center gap-2"><Check className="w-3 h-3 text-shell-600" /> Waste source location and type</li>
                            <li className="flex items-center gap-2"><Check className="w-3 h-3 text-shell-600" /> Volume collected and diverted from dumping</li>
                            <li className="flex items-center gap-2"><Check className="w-3 h-3 text-shell-600" /> Processing stages completed</li>
                            <li className="flex items-center gap-2"><Check className="w-3 h-3 text-shell-600" /> Final product and buyer</li>
                            <li className="flex items-center gap-2"><Check className="w-3 h-3 text-shell-600" /> Digital material passport with QR code</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {index < processingSteps.length - 1 && (
                    <div className="hidden md:flex justify-center my-6">
                      <ArrowRight className="w-5 h-5 text-shell-300 rotate-90" />
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Ecosystem"
            title="Who Is Part of the ShellCrete System?"
            subtitle="A circular economy model where every stakeholder benefits — from waste producer to final builder."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {ecosystem.map((actor, index) => (
              <ScrollReveal key={actor.role} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-shell-300 hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-shell-100 text-shell-700 flex items-center justify-center mb-4">
                    <actor.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-stone-900 mb-2">{actor.role}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-3">{actor.description}</p>
                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-xs text-shell-700 font-medium flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {actor.benefit}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who Pays */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-shell-900 to-shell-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-shell-700/50 flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold">Who Pays?</h2>
              </div>
              <p className="text-shell-100 leading-relaxed mb-6">
                The main payers are not households. The more logical payers are:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Concrete product manufacturers seeking lower-cost fillers",
                  "Construction companies needing green material credentials",
                  "Developers with ESG and sustainability mandates",
                  "Municipalities and government green building programmes",
                  "Sustainability programmes requiring verified impact proof",
                  "NGOs working on coastal waste management",
                ].map((payer) => (
                  <div key={payer} className="flex items-start gap-3 bg-shell-800/50 rounded-lg p-3">
                    <Check className="w-4 h-4 text-shell-300 shrink-0 mt-0.5" />
                    <span className="text-sm text-shell-100">{payer}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
