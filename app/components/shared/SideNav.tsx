"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const navItems = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/dashboard/listings", icon: "inventory_2", label: "My Listings" },
  { href: "/dashboard/inbox", icon: "chat_bubble", label: "Inbox" },
  { href: "/cart", icon: "receipt_long", label: "Orders" },
  { href: "/dashboard/analytics", icon: "leaderboard", label: "Analytics" },
];

const footerItems = [
  { href: "/settings", icon: "settings", label: "Settings" },
  { href: "/help", icon: "help", label: "Help" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 sticky top-0 shrink-0 bg-surface-container-lowest z-40">
      <div className="flex flex-col gap-2 p-4 h-full">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-primary p-4 font-headline mb-2"
        >
          ADEL
        </Link>

        {/* User Card */}
        <div className="flex items-center gap-4 p-4 mb-4 bg-surface-container-low rounded-xl">
          <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center text-primary font-headline font-bold text-lg">
            A
          </div>
          <div>
            <p className="font-headline font-bold text-sm text-on-surface">
              Welcome, Curator
            </p>
            <p className="font-label text-xs text-primary flex items-center gap-1">
              <Icon name="verified" filled size={14} />
              Campus Hub Verified
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" &&
                pathname.startsWith(item.href));
            const isDashboardActive =
              item.href === "/dashboard" && pathname === "/dashboard";

            const active = item.href === "/dashboard" ? isDashboardActive : isActive;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 font-body text-sm font-semibold transition-all duration-200 active:opacity-80 ${
                  active
                    ? "bg-primary-container/20 text-primary"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
              >
                <Icon name={item.icon} filled={active} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/sell/new"
          className="w-full py-3 mt-4 bg-gradient-to-r from-primary to-primary-dim text-white rounded-full font-label font-bold text-sm text-center hover:brightness-110 active:scale-[0.98] transition-all"
          style={{
            boxShadow: "0 4px 14px 0 rgba(0,105,71,0.39)",
          }}
        >
          List an Item
        </Link>

        {/* Footer Nav */}
        <div className="mt-6 space-y-1">
          {footerItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 text-on-surface-variant px-4 py-3 font-body text-sm font-semibold hover:bg-surface-container-low rounded-lg transition-all"
            >
              <Icon name={item.icon} />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
