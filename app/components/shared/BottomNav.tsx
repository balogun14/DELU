"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const tabs = [
  { href: "/dashboard", icon: "grid_view", label: "Hub" },
  { href: "/marketplace/products", icon: "local_mall", label: "Market" },
  { href: "/marketplace/food", icon: "restaurant", label: "Food" },
  { href: "/sell/new", icon: "add_circle", label: "Sell" },
  { href: "/dashboard/inbox", icon: "person", label: "Account" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      id="bottom-nav"
      className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 bg-surface-container-lowest/90 backdrop-blur-xl z-50 rounded-t-2xl"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.05)" }}
    >
      {tabs.map((tab) => {
        const isActive =
          pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all active:scale-95 ${
              isActive
                ? "bg-primary-container/30 text-primary"
                : "text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <Icon
              name={tab.icon}
              filled={isActive}
              className="text-[24px] mb-0.5"
            />
            <span
              className={`text-[10px] font-label uppercase tracking-wider mt-0.5 ${
                isActive ? "font-bold" : "font-semibold"
              }`}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
