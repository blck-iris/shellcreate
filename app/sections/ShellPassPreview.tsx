"use client";

import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { SectionHeading } from "@/app/components/SectionHeading";
import { dashboardData, shellTypes, wasteSources } from "@/app/lib/data";
import {
  LayoutDashboard,
  TrendingUp,
  PieChart,
  CheckCircle2,
  QrCode,
  ArrowRight,
  Activity,
  MapPin,
  Calendar,
} from "lucide-react";

export function ShellPassPreview() {
  return (
    <section id="shellpass" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Digital Traceability"
          title="ShellPass: From Waste to Verified Material"
          subtitle="A digital platform that maps shell waste sources, tracks processing, connects buyers, and generates material passports."
        />

        <ScrollReveal>
          <div className="mt-12 bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden shadow-xl shadow-stone-900/5">
            {/* Dashboard header */}
            <div className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-shell-700 text-white flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">ShellPass</h3>
                  <p className="text-[10px] text-stone-500">Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  May 1 – May 31, 2024
                </span>
                <span className="px-3 py-1.5 text-xs font-semibold text-stone-600 bg-white border border-stone-200 rounded-lg">
                  Export Report
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { label: "Total Shell Waste Collected", value: "15,420", unit: "kg", change: "+18%", changeLabel: "vs Apr", color: "shell" },
                  { label: "Processed", value: "12,350", unit: "kg", change: "+22%", changeLabel: "vs Apr", color: "ocean" },
                  { label: "ShellCrete Products", value: "6,210", unit: "units", change: "+15%", changeLabel: "vs Apr", color: "sand" },
                  { label: "CO₂e Avoided", value: "22,450", unit: "kg", change: "+20%", changeLabel: "vs Apr", color: "shell" },
                  { label: "Impact Score", value: "88", unit: "/100", change: "Excellent", changeLabel: "", color: "shell" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-white rounded-xl p-4 border border-stone-200">
                    <p className="text-[10px] text-stone-500 font-medium mb-1">{kpi.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-stone-900">{kpi.value}</span>
                      <span className="text-xs text-stone-400">{kpi.unit}</span>
                    </div>
                    {kpi.change && (
                      <span className={`inline-flex items-center text-[10px] font-bold mt-1 ${kpi.change === "Excellent" ? "text-shell-600" : "text-shell-600"}`}>
                        <TrendingUp className="w-3 h-3 mr-0.5" />
                        {kpi.change} {kpi.changeLabel}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Shell Waste Sources */}
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-shell-600" />
                    Shell Waste Sources
                  </h4>
                  <div className="space-y-2.5">
                    {wasteSources.map((source) => (
                      <div key={source.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-shell-400" />
                          <span className="text-xs text-stone-600">{source.name}</span>
                        </div>
                        <span className="text-xs font-bold text-stone-900">{source.volume.toLocaleString()} kg</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shell Types Pie */}
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <PieChart className="w-3.5 h-3.5 text-ocean-600" />
                    Shell Types Collected
                  </h4>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        {shellTypes.reduce(
                          (acc, type, i) => {
                            const start = acc.offset;
                            const end = start + (type.percentage / 100) * 100;
                            const dashArray = `${type.percentage} ${100 - type.percentage}`;
                            const dashOffset = -acc.offset;
                            acc.offset = end;
                            acc.elements.push(
                              <circle
                                key={type.name}
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="none"
                                stroke={type.color}
                                strokeWidth="3.5"
                                strokeDasharray={dashArray}
                                strokeDashoffset={dashOffset}
                                className="transition-all duration-500"
                              />
                            );
                            return acc;
                          },
                          { offset: 0, elements: [] as React.ReactNode[] }
                        ).elements}
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-stone-400">Types</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {shellTypes.map((type) => (
                      <div key={type.name} className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }} />
                          <span className="text-stone-600">{type.name}</span>
                        </div>
                        <span className="text-stone-400">{type.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Processing Status */}
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-sand-600" />
                    Processing Status
                  </h4>
                  <div className="space-y-3">
                    {dashboardData.processingStatus.map((status) => (
                      <div key={status.stage}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-stone-600">{status.stage}</span>
                          <span className="text-xs font-bold text-stone-900">{status.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-shell-500 rounded-full transition-all duration-1000"
                            style={{ width: `${status.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Material Passport */}
              <div className="mt-6 bg-white rounded-xl p-5 border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold text-stone-900 flex items-center gap-2">
                    <QrCode className="w-3.5 h-3.5 text-shell-600" />
                    Material Passport (Example)
                  </h4>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-shell-50 text-shell-700 text-[10px] font-bold border border-shell-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Circular Material
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <p className="text-stone-400 mb-0.5">Product ID</p>
                    <p className="font-mono font-semibold text-stone-900">SC-2024-000123</p>
                  </div>
                  <div>
                    <p className="text-stone-400 mb-0.5">Product Type</p>
                    <p className="font-semibold text-stone-900">Paving Block</p>
                  </div>
                  <div>
                    <p className="text-stone-400 mb-0.5">Shell Waste Source</p>
                    <p className="font-semibold text-stone-900">Malindi Seafood Market</p>
                  </div>
                  <div>
                    <p className="text-stone-400 mb-0.5">Used In</p>
                    <p className="font-semibold text-stone-900">Oceanview Walkway Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 text-center">
          <Link
            href="/shellpass"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-shell-700 bg-shell-50 hover:bg-shell-100 border border-shell-200 rounded-xl transition-colors"
          >
            Open Full ShellPass Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
