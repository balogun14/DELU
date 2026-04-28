import SideNav from "@/app/components/shared/SideNav";
import TopNav from "@/app/components/shared/TopNav";
import BottomNav from "@/app/components/shared/BottomNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your ADEL campus hub — manage listings, messages, and marketplace activity.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-surface-bright pb-24 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
