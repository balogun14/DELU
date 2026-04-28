"use client";

import Link from "next/link";
import Icon from "./Icon";

export default function TopNav() {
  return (
    <header
      className="w-full sticky top-0 z-50 md:hidden"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-primary font-headline"
        >
          ADEL
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-primary-dim transition-colors active:scale-95">
            <Icon name="notifications" />
          </button>
          <button className="text-primary hover:text-primary-dim transition-colors active:scale-95">
            <Icon name="favorite" />
          </button>
          <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary font-headline font-bold text-sm border-2 border-primary-container">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
