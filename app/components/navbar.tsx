"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchRatio from "./SearchRadio";
import { InteractiveHoverButton } from "./intereactive-hover-button";
import DashBoard from "@/app/components/ui/Dashboard";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/news", label: "NEWS" },
    { href: "/what-we-do", label: "WHAT WE DO" },
    { href: "/statistics", label: "STATISTICS" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/">
            <div className="text-3xl font-black tracking-tight text-[#10B981] hover:opacity-80 transition">
              DELU
            </div>
          </Link>

          <section className="hidden md:block shrink-0">
            <SearchRatio />
          </section>

          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold tracking-wide text-slate-300 hover:text-[#10B981] transition"
              >
                {label}
              </Link>
            ))}

            <DashBoard />

            <Link href="/auth/register">
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded-md p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed top-[64px] w-full z-40 md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/10 px-4 pb-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-3 text-sm font-semibold tracking-wide text-slate-300 hover:text-[#10B981] transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-4">
            <DashBoard />
            <Link href="/auth/register" onClick={() => setIsOpen(false)}>
              <InteractiveHoverButton>Try For Free</InteractiveHoverButton>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
