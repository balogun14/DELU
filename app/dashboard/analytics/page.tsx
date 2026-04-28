import Icon from "@/app/components/shared/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Track your ADEL marketplace performance — revenue, views, and satisfaction metrics.",
};

const kpis = [
  { label: "Total Revenue", value: "$4,250", decimal: ".00", icon: "account_balance_wallet", iconBg: "bg-emerald-50", iconColor: "text-primary", trend: "12.5%", trendUp: true, trendLabel: "vs last month" },
  { label: "Active Listings", value: "24", decimal: "", icon: "library_books", iconBg: "bg-blue-50", iconColor: "text-secondary", trend: "3 new", trendUp: true, trendLabel: "this week" },
  { label: "Total Profile Views", value: "1,842", decimal: "", icon: "visibility", iconBg: "bg-purple-50", iconColor: "text-purple-600", trend: "2.1%", trendUp: false, trendLabel: "vs last month" },
  { label: "Satisfaction", value: "4.9", decimal: "/5", icon: "kid_star", iconBg: "bg-tertiary/10", iconColor: "text-tertiary", trend: "", trendUp: false, trendLabel: "Based on 128 reviews" },
];

export default function AnalyticsPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
            Analytics Overview
          </h1>
          <p className="font-body text-on-surface-variant text-base">
            Track your performance and marketplace engagement.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-full px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-surface-container-low transition-colors w-fit">
          <Icon name="calendar_month" className="text-primary" />
          <span className="font-label font-medium text-sm text-on-surface">Last 30 Days</span>
          <Icon name="expand_more" className="text-outline" size={18} />
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="flex justify-between items-start mb-4">
              <p className="font-label font-medium text-on-surface-variant text-sm uppercase tracking-wider">
                {kpi.label}
              </p>
              <div className={`w-8 h-8 rounded-full ${kpi.iconBg} flex items-center justify-center ${kpi.iconColor}`}>
                <Icon name={kpi.icon} filled={kpi.icon === "kid_star"} size={18} />
              </div>
            </div>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">
              {kpi.value}
              {kpi.decimal && <span className="text-lg text-outline font-normal">{kpi.decimal}</span>}
            </h3>
            <div className="flex items-center gap-2">
              {kpi.trend && (
                <span className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 ${
                  kpi.trendUp ? "bg-primary/10 text-primary" : "bg-error/10 text-error"
                }`}>
                  <Icon name={kpi.trendUp ? "trending_up" : "trending_down"} size={10} />
                  {kpi.trend}
                </span>
              )}
              <span className="font-body text-xs text-outline">{kpi.trendLabel}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Placeholder Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl">
          <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Revenue Trend</h3>
          <div className="h-48 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant">
            <div className="text-center">
              <Icon name="show_chart" size={40} className="opacity-30 mb-2" />
              <p className="text-sm font-body">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl">
          <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Category Breakdown</h3>
          <div className="h-48 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant">
            <div className="text-center">
              <Icon name="donut_large" size={40} className="opacity-30 mb-2" />
              <p className="text-sm font-body">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
