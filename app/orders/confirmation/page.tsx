import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed!",
  description: "Your ADEL order has been confirmed. Funds are held securely until delivery.",
};

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background">
      <div className="w-full max-w-2xl">
        {/* Celebration Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-container text-on-primary-container mb-6"
            style={{ boxShadow: "0 8px 32px rgba(0,105,71,0.15)" }}
          >
            <Icon name="check_circle" filled className="text-5xl" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-3">
            Order Confirmed!
          </h1>
          <p className="font-body text-on-surface-variant text-lg">
            Your transaction was successful. We&apos;ve notified the sellers.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 mb-8 relative overflow-hidden"
          style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.04)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-bl-full opacity-20 -mr-10 -mt-10 pointer-events-none" />

          {/* Order Meta */}
          <div className="flex flex-wrap justify-between items-end mb-8 pb-6 relative">
            <div className="absolute bottom-0 left-0 w-full h-px bg-outline-variant/15" />
            <div>
              <p className="font-label text-sm text-on-surface-variant mb-1 uppercase tracking-wider">Order Number</p>
              <p className="font-headline text-xl font-bold text-on-surface">#AD-9421</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="font-label text-sm text-on-surface-variant mb-1">October 24, 2023</p>
              <div className="inline-flex items-center bg-surface-container-low px-3 py-1 rounded-full">
                <Icon name="account_balance_wallet" size={16} className="mr-2 text-primary" />
                <span className="font-body text-sm font-medium text-on-surface">Student Wallet</span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4 mb-8">
            <h2 className="font-headline text-lg font-semibold text-on-surface">Order Summary</h2>
            <div className="flex items-start bg-surface-container-low p-4 rounded-2xl">
              <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 shrink-0 bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <Icon name="restaurant" filled size={28} />
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline font-bold text-on-surface">Authentic Jollof Rice</h3>
                  <p className="font-headline font-bold text-on-surface">3,450 HUF</p>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-2">Seller: Culinary Club</p>
                <span className="inline-block bg-tertiary-container/30 text-on-tertiary-container font-label text-xs px-2 py-1 rounded-lg">
                  Food &amp; Drink
                </span>
              </div>
            </div>
            <div className="flex items-start bg-surface-container-low p-4 rounded-2xl">
              <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 shrink-0 bg-primary-container/20 flex items-center justify-center text-primary">
                <Icon name="functions" size={28} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-headline font-bold text-on-surface">Calculus II Tutoring</h3>
                  <p className="font-headline font-bold text-on-surface">7,500 HUF</p>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-2">Seller: Alex M. • 2 Hours</p>
                <span className="inline-block bg-primary-container/30 text-on-primary-container font-label text-xs px-2 py-1 rounded-lg">
                  Academic Support
                </span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="bg-surface-container-high rounded-2xl p-5 flex justify-between items-center">
            <span className="font-headline text-lg font-semibold text-on-surface">Total Paid</span>
            <span className="font-headline text-2xl font-extrabold text-primary">10,950 HUF</span>
          </div>
        </div>

        {/* Trust */}
        <div className="flex items-center justify-center mb-8 px-6 py-4 bg-primary-container/10 backdrop-blur-md rounded-xl">
          <Icon name="verified_user" className="text-primary mr-3 text-xl" />
          <p className="font-body text-sm text-on-surface-variant text-center">
            <strong className="text-primary font-semibold">Secure Transaction.</strong>{" "}
            Funds are held until items are received or services are completed.
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/dashboard"
            className="w-full py-4 px-6 rounded-full bg-linear-to-br from-primary to-primary-dim text-on-primary font-headline font-bold flex items-center justify-center group hover:brightness-110 active:scale-95 transition-all"
            style={{ boxShadow: "0 8px 16px rgba(0,105,71,0.15)" }}
          >
            View Order Status
            <Icon name="arrow_forward" className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/dashboard/inbox"
              className="w-full py-4 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold flex items-center justify-center active:scale-95 transition-all"
            >
              <Icon name="chat" className="mr-2" />
              Message
            </Link>
            <Link
              href="/marketplace/products"
              className="w-full py-4 rounded-full bg-surface-container-high text-on-surface font-headline font-bold flex items-center justify-center active:scale-95 transition-all hover:bg-surface-dim"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
