"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import {
  Menu,
  X,
  Shell,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "Impact", href: "/#impact" },
  { label: "ShellPass", href: "/shellpass" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-stone-200/60"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-shell-700 text-white shadow-lg shadow-shell-700/20 group-hover:shadow-shell-700/30 transition-shadow">
              <Shell className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-stone-900 leading-none">
                ShellCrete
              </span>
              <span className="text-[10px] font-medium text-stone-500 tracking-wide leading-tight">
                Better Materials. Less Quarrying.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-600 hover:text-shell-700 rounded-lg hover:bg-shell-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/shellpass"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-shell-700 hover:bg-shell-800 rounded-lg transition-colors shadow-md shadow-shell-700/20"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-lg">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-stone-700 hover:text-shell-700 hover:bg-shell-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/shellpass"
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-sm font-semibold text-white bg-shell-700 hover:bg-shell-800 rounded-lg transition-colors"
              >
                Get Started
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
