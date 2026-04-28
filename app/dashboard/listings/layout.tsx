import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Listings | ADEL",
  description: "Manage your active listings, monitor performance, and update your ADEL catalog.",
};

export default function ListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
