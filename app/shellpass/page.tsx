"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { dashboardData, shellTypes, wasteSources } from "@/app/lib/data";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { AnimatedCounter } from "@/app/components/AnimatedCounter";
import {
  LayoutDashboard,
  TrendingUp,
  PieChart,
  Activity,
  QrCode,
  CheckCircle2,
  Calendar,
  MapPin,
  Package,
  Users,
  Settings,
  FileText,
  BarChart3,
  ArrowUpRight,
  Filter,
  Search,
  Download,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ShellPass — Digital Traceability Dashboard",
  description:
    "ShellPass maps shell waste sources, tracks processing, connects buyers, and generates verified material passports for the shell-to-construction value chain.",
};

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Sources", icon: MapPin, active: false },
  { label: "Collections", icon: Package, active: false },
  { label: "Processing", icon: Activity, active: false },
  { label: "Products", icon: BarChart3, active: false },
  { label: "Transactions", icon: TrendingUp, active: false },
  { label: "Impact", icon: FileText, active: false },
  { label: "Users", icon: Users, active: false },
  { label: "Reports", icon: FileText, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function ShellPassPage() {
  const [dateRange, setDateRange] = useState("May 1 – May 31, 2024");

  return (
    <div className="pt-20 pb-16 min-h-screen bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden sticky top-24">
                <div className="p-4 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-shell-700 text-white flex items-center justify-center">
                      <LayoutDashboard className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-900">ShellPass</p>
                      <p className="text-[10px] text-stone-500">Traceability Platform</p>
                    </div>
                  </div>
                </div>
                <nav className="p-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.label}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        item.active
                          ? "bg-shell-50 text-shell-700"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </ScrollReveal>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Header */}
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-stone-200 p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-lg font-bold text-stone-900">Dashboard</h1>
                  <p className="text-xs text-stone-500">Overview of your shell material journey</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
                    <Calendar className="w-3.5 h-3.5" />
                    {dateRange}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50">
                    <Download className="w-3.5 h-3.5" />
                    Export Report
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {[
                { label: "Total Shell Waste Collected", value: dashboardData.totalWaste, unit: "kg", change: "+18%", changeLabel: "vs Apr", color: "shell" },
                { label: "Processed", value: dashboardData.processed, unit: "kg", change: "+22%", changeLabel: "vs Apr", color: "ocean" },
                { label: "ShellCrete Products", value: dashboardData.products, unit: "units", change: "+15%", changeLabel: "vs Apr", color: "sand" },
                { label: "CO₂e Avoided", value: dashboardData.co2Avoided, unit: "kg", change: "+20%", changeLabel: "vs Apr", color: "shell" },
                { label: "Impact Score", value: dashboardData.impactScore, unit: "/100", change: "Excellent", changeLabel: "", color: "shell" },
              ].map((kpi) => (
                <ScrollReveal key={kpi.label} delay={0.05}>
                  <div className="bg-white rounded-xl p-4 border border-stone-200 hover:shadow-md transition-shadow">
                    <p className="text-[10px] text-stone-500 font-medium mb-1 leading-tight">{kpi.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-stone-900">
                        <AnimatedCounter target={kpi.value} />
                      </span>
                      <span className="text-xs text-stone-400">{kpi.unit}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <TrendingUp className="w-3 h-3 text-shell-600" />
                      <span className="text-[10px] font-bold text-shell-600">{kpi.change}</span>
                      {kpi.changeLabel && <span className="text-[10px] text-stone-400">{kpi.changeLabel}</span>}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Shell Waste Sources */}
              <ScrollReveal>
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-shell-600" />
                    Shell Waste Sources
                  </h3>
                  <div className="space-y-3">
                    {wasteSources.map((source) => (
                      <div key={source.name}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-shell-400" />
                            <span className="text-xs text-stone-600">{source.name}</span>
                          </div>
                          <span className="text-xs font-bold text-stone-900">{source.volume.toLocaleString()} kg</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-shell-400 rounded-full"
                            style={{ width: `${(source.volume / 6230) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Shell Types */}
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-ocean-600" />
                    Shell Types Collected
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-28 h-28">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        {shellTypes.reduce(
                          (acc, type) => {
                            const dashArray = `${type.percentage} ${100 - type.percentage}`;
                            const dashOffset = -acc.offset;
                            acc.offset += type.percentage;
                            acc.elements.push(
                              <circle
                                key={type.name}
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="none"
                                stroke={type.color}
                                strokeWidth="4"
                                strokeDasharray={dashArray}
                                strokeDashoffset={dashOffset}
                              />
                            );
                            return acc;
                          },
                          { offset: 0, elements: [] as React.ReactNode[] }
                        ).elements}
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {shellTypes.map((type) => (
                      <div key={type.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: type.color }} />
                          <span className="text-stone-600">{type.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-stone-400">{type.percentage}%</span>
                          <span className="text-stone-300 text-[10px]">Ca: {type.calcium}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Processing Status */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-sand-600" />
                    Processing Status
                  </h3>
                  <div className="space-y-4">
                    {dashboardData.processingStatus.map((status) => (
                      <div key={status.stage}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-stone-600 font-medium">{status.stage}</span>
                          <span className="text-xs font-bold text-stone-900">{status.percentage}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-shell-400 to-shell-600 rounded-full transition-all duration-1000"
                            style={{ width: `${status.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Recent Transactions & Material Passport */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <ScrollReveal>
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-shell-600" />
                      Recent Transactions
                    </h3>
                    <button className="text-xs text-shell-700 font-medium hover:text-shell-800 flex items-center gap-1">
                      View All <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {dashboardData.recentTransactions.map((tx, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-shell-100 text-shell-700 flex items-center justify-center text-xs font-bold">
                            {tx.buyer.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-stone-900">{tx.buyer}</p>
                            <p className="text-[10px] text-stone-500">{tx.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-stone-900">{tx.amount}</p>
                          <p className="text-[10px] text-stone-400">{tx.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-xl p-5 border border-stone-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-shell-600" />
                      Material Passport
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-shell-50 text-shell-700 text-[10px] font-bold border border-shell-200">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Product ID</p>
                        <p className="text-xs font-mono font-bold text-stone-900">SC-2024-000123</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Product Type</p>
                        <p className="text-xs font-bold text-stone-900">Paving Block</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Shell Type</p>
                        <p className="text-xs font-bold text-stone-900">Oyster Shells</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Processed On</p>
                        <p className="text-xs font-bold text-stone-900">May 15, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Waste Source</p>
                        <p className="text-xs font-bold text-stone-900">Malindi Seafood Market</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Used In</p>
                        <p className="text-xs font-bold text-stone-900">Oceanview Walkway</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                      <span className="text-[10px] text-stone-400">Status: Completed</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-shell-100 text-shell-700 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Circular Material
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Products in Use */}
            <ScrollReveal>
              <div className="bg-white rounded-xl p-5 border border-stone-200">
                <h3 className="text-sm font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-shell-600" />
                  ShellCrete Products in Use
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-stone-100">
                        <th className="text-left py-2 px-3 text-stone-400 font-medium">Product</th>
                        <th className="text-left py-2 px-3 text-stone-400 font-medium">Project</th>
                        <th className="text-left py-2 px-3 text-stone-400 font-medium">Location</th>
                        <th className="text-left py-2 px-3 text-stone-400 font-medium">Status</th>
                        <th className="text-left py-2 px-3 text-stone-400 font-medium">Shell Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboardData.productsInUse.map((product, i) => (
                        <tr key={i} className="border-b border-stone-50 hover:bg-stone-50">
                          <td className="py-3 px-3 font-semibold text-stone-900">{product.name}</td>
                          <td className="py-3 px-3 text-stone-600">{product.project}</td>
                          <td className="py-3 px-3 text-stone-600">{product.location}</td>
                          <td className="py-3 px-3">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-shell-100 text-shell-700 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              {product.status}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-stone-600">{product.shellType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          </main>
        </div>
      </div>
    </div>
  );
}
