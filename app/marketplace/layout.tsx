import TopNav from "@/app/components/shared/TopNav";
import BottomNav from "@/app/components/shared/BottomNav";
import SideNav from "@/app/components/shared/SideNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Browse student-verified products, services, and food on ADEL campus marketplace.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-background pb-24 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
