import type { Metadata } from "next";
import { products, researchStats } from "@/app/lib/data";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import {
  Check,
  Beaker,
  Shield,
  Weight,
  Thermometer,
  Droplets,
  Ruler,
  Leaf,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products — ShellCrete Non-Structural Construction Materials",
  description:
    "Explore ShellCrete's range of shell-based non-structural construction products: paving blocks, bricks, tiles, and precast panels with verified calcium carbonate partial substitution.",
};

const techSpecs = [
  {
    icon: Beaker,
    label: "CaCO₃ Content",
    value: researchStats.calciumCarbonateContent,
    desc: "Shell powder is ~98% calcium carbonate, chemically similar to limestone.",
  },
  {
    icon: Shield,
    label: "Compressive Strength",
    value: "30+ MPa",
    desc: `At ${researchStats.optimalCementReplacement} replacement, strength remains comparable to control mix. At 40%, still meets building standards.`,
  },
  {
    icon: Weight,
    label: "Density Reduction",
    value: "Up to 10%",
    desc: "Shell-based concrete is lighter, reducing transport emissions and handling costs.",
  },
  {
    icon: Thermometer,
    label: "Freeze-Thaw Resistance",
    value: "Enhanced",
    desc: "Improved durability in cold climates due to modified pore structure.",
  },
  {
    icon: Droplets,
    label: "Water Absorption",
    value: "Improved",
    desc: "WOSP-treated concrete shows reduced water absorption vs. standard mixes.",
  },
  {
    icon: Ruler,
    label: "Setting Time",
    value: "+30% initial",
    desc: "Slightly extended initial setting time allows better workability on site.",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-shell-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Product Range"
            title="ShellCrete Non-Structural Products"
            subtitle="High quality construction materials with partial shell-based calcium carbonate substitution. Verified, traceable, and ready for your next project."
            align="left"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
                  <div className="aspect-[16/9] bg-gradient-to-br from-stone-100 to-stone-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-shell-100 text-shell-700 mb-2">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                          </svg>
                        </div>
                        <p className="text-stone-400 text-sm font-medium">{product.name}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-shell-700 border border-shell-200">
                        <Leaf className="w-3 h-3" />
                        Eco-Certified
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-stone-900 mb-3">{product.name}</h2>
                    <p className="text-stone-600 text-sm leading-relaxed mb-5">{product.description}</p>

                    <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2 px-3 py-2 bg-stone-50 rounded-lg">
                          <Check className="w-4 h-4 text-shell-600 shrink-0" />
                          <span className="text-xs font-medium text-stone-700">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                      <span className="text-xs text-stone-400">Shell substitution:</span>
                      <span className="text-xs font-bold text-shell-700 bg-shell-50 px-2 py-1 rounded-md">
                        {product.name === "Bricks" ? "Up to 40%" : "10–15%"}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical Data"
            title="Research-Backed Performance"
            subtitle="Every specification is grounded in peer-reviewed studies on shell-based concrete materials."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {techSpecs.map((spec, index) => (
              <ScrollReveal key={spec.label} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-shell-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-shell-100 text-shell-700 flex items-center justify-center">
                      <spec.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500">{spec.label}</p>
                      <p className="text-lg font-bold text-stone-900">{spec.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{spec.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
