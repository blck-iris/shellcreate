"use client";

import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { ArrowRight, Shell, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-shell-900 via-shell-800 to-shell-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-shell-700/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-ocean-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shell-700/50 border border-shell-600 text-shell-200 text-xs font-semibold tracking-wider uppercase mb-6">
            <Shell className="w-3.5 h-3.5" />
            Join the Circular Construction Movement
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 text-balance">
            Ready to turn shell waste into building materials?
          </h2>

          <p className="text-lg text-shell-100 leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            Whether you are a restaurant with shell waste, a processor looking for supply,
            or a developer seeking verified green materials — ShellCrete and ShellPass
            connect the dots.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shellpass"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-shell-900 bg-white hover:bg-shell-50 rounded-xl transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5"
            >
              Get Started with ShellPass
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@shellcrete.io"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-shell-700/50 hover:bg-shell-700/70 border border-shell-600 rounded-xl transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Our Team
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
