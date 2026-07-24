"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Leaf,
  Recycle,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-shell-50/30 to-ocean-50/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-shell-200/30 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-ocean-200/20 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-sand-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shell-100 border border-shell-200 text-shell-800 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-shell-600 animate-pulse" />
              Shell Waste &middot; Calcium Carbonate &middot; Greener Building
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] text-balance">
              Turning discarded shells into{" "}
              <span className="text-shell-700">sustainable construction materials</span>.
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed max-w-xl text-balance">
              ShellCrete uses calcium-rich shells from restaurants, markets, coastal communities
              and households as a partial substitute in non-structural concrete products.
              ~98% CaCO₃. Verified impact. Less quarrying.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/shellpass"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-shell-700 hover:bg-shell-800 rounded-xl transition-all shadow-lg shadow-shell-700/25 hover:shadow-xl hover:shadow-shell-700/30 hover:-translate-y-0.5"
              >
                Explore ShellPass
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                View Our Products
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {[
                {
                  icon: Leaf,
                  title: "Less Quarrying",
                  desc: "Lower environmental pressure",
                },
                {
                  icon: Recycle,
                  title: "Circular Solution",
                  desc: "Shell waste gets a new life",
                },
                {
                  icon: ShieldCheck,
                  title: "Verified Impact",
                  desc: "Traceable from source to final product",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-shell-100 text-shell-700 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{item.title}</p>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 border border-stone-200/60">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 relative">
                <Image
                  src="/images/hero.png"
                  alt="Shells and Concrete Blocks"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl shadow-stone-900/10 p-4 border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-shell-100 flex items-center justify-center text-shell-700">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">From Waste</p>
                  <p className="text-sm font-bold text-stone-900">To Greener Buildings</p>
                </div>
              </div>
            </motion.div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 lg:left-8 bg-white rounded-2xl shadow-xl shadow-stone-900/10 p-4 border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-700">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-stone-900">~98%</p>
                  <p className="text-xs text-stone-500">CaCO₃ Content</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
