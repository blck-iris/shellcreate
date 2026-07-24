"use client";

import Link from "next/link";
import { Shell, Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-shell-600 text-white">
                <Shell className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">ShellCrete</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              Turning discarded shells into verified calcium-rich inputs for lower-impact concrete products. Building a circular future, one shell at a time.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-2.5">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Products", href: "/products" },
                { label: "ShellPass Dashboard", href: "/shellpass" },
                { label: "Research & Papers", href: "/research" },
                { label: "Impact Reports", href: "/#impact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-stone-400 hover:text-shell-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {["About Us", "Careers", "Press Kit", "Sustainability", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-stone-400 hover:text-shell-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <Mail className="w-4 h-4 mt-0.5 text-shell-500" />
                <span>hello@shellcrete.io</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <Phone className="w-4 h-4 mt-0.5 text-shell-500" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin className="w-4 h-4 mt-0.5 text-shell-500" />
                <span>Malindi, Kenya<br />Coastal Innovation Hub</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} ShellCrete. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-stone-500">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Sustainability</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
