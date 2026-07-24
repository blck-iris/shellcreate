"use client";

import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { products } from "@/app/lib/data";
import { ArrowRight, Check } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="py-24 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Products"
          title="ShellCrete Non-Structural Products"
          subtitle="High quality. Durable. Sustainable. Partial shell-based calcium carbonate substitution for selected non-structural applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.1}>
              <div className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-shell-100 text-shell-700 mb-3">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                      </div>
                      <p className="text-stone-400 text-xs font-medium">{product.name}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-white/90 backdrop-blur text-[10px] font-semibold text-shell-700 border border-shell-200">
                      Eco-Certified
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-shell-600 shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-shell-700 bg-shell-50 hover:bg-shell-100 border border-shell-200 rounded-xl transition-colors"
          >
            View All Products & Specifications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
