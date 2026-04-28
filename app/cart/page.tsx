import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import TopNav from "@/app/components/shared/TopNav";
import BottomNav from "@/app/components/shared/BottomNav";
import SideNav from "@/app/components/shared/SideNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your items and complete checkout on ADEL campus marketplace.",
};

const cartItems = [
  {
    id: "food-1",
    title: "Authentic Jollof Rice",
    subtitle: "Prepared by Sarah K. • Student Chef",
    price: 4500,
    currency: "HUF",
    quantity: 2,
    type: "food",
    badge: "Hot",
  },
  {
    id: "svc-2",
    title: "Calculus II Tutoring",
    subtitle: "1 Hour Session • Wed, 4:00 PM",
    price: 6000,
    currency: "HUF",
    quantity: 1,
    type: "service",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const serviceFee = 450;
  const total = subtotal + serviceFee;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-background pb-24 md:pb-0">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Cart Items */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-2">
                  Your Cart
                </h1>
                <p className="text-on-surface-variant text-sm font-body">
                  Review your items and complete checkout.
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-xl bg-surface-container-lowest"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative bg-surface-container flex items-center justify-center">
                      <Icon
                        name={item.type === "food" ? "restaurant" : "school"}
                        filled
                        size={32}
                        className={item.type === "food" ? "text-tertiary" : "text-secondary"}
                      />
                      {item.badge && (
                        <div className="absolute top-1.5 right-1.5 bg-tertiary text-on-tertiary text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                          <Icon name="local_fire_department" filled size={10} />
                          {item.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-headline font-semibold text-base text-on-surface leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-on-surface-variant text-sm mt-1 font-body">
                            {item.subtitle}
                          </p>
                        </div>
                        <button className="text-on-surface-variant hover:text-error transition-colors p-1 rounded-full">
                          <Icon name="close" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end mt-3">
                        {item.type === "food" ? (
                          <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-1 py-1">
                            <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
                              <Icon name="remove" size={16} />
                            </button>
                            <span className="font-semibold text-sm w-4 text-center">
                              {item.quantity}
                            </span>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
                              <Icon name="add" size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="text-sm text-secondary font-medium flex items-center gap-1 bg-secondary-container/50 px-3 py-1.5 rounded-full">
                            <Icon name="schedule" size={14} />
                            Change Time
                          </div>
                        )}
                        <span className="font-headline font-bold text-lg text-primary">
                          {item.price.toLocaleString()} {item.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fulfillment Options */}
              <div className="bg-surface-container-lowest p-6 rounded-xl">
                <h3 className="font-headline font-semibold text-lg text-on-surface mb-4 flex items-center gap-2">
                  <Icon name="local_shipping" className="text-primary" />
                  Fulfillment Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative flex cursor-pointer rounded-xl bg-primary-container/10 p-4 ring-2 ring-primary ring-offset-2 ring-offset-surface-container-lowest transition-all">
                    <input type="radio" name="fulfillment" value="pickup" defaultChecked className="sr-only" />
                    <span className="flex flex-1 flex-col">
                      <span className="block text-sm font-medium text-on-surface font-headline">Campus Pickup</span>
                      <span className="mt-1 text-sm text-on-surface-variant">Main Library Foyer</span>
                      <span className="mt-2 text-sm font-semibold text-primary">Free</span>
                    </span>
                    <Icon name="check_circle" filled className="text-primary" />
                  </label>
                  <label className="relative flex cursor-pointer rounded-xl bg-surface-container-low p-4 hover:bg-surface-container transition-all"
                    style={{ border: "1px solid rgba(171,173,175,0.3)" }}
                  >
                    <input type="radio" name="fulfillment" value="delivery" className="sr-only" />
                    <span className="flex flex-1 flex-col">
                      <span className="block text-sm font-medium text-on-surface font-headline">Dorm Delivery</span>
                      <span className="mt-1 text-sm text-on-surface-variant">To your building</span>
                      <span className="mt-2 text-sm font-semibold text-on-surface-variant">+800 HUF</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 lg:sticky lg:top-8">
                <h3 className="font-headline font-bold text-xl text-on-surface mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4 text-sm font-body mb-6">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Items ({cartItems.length})</span>
                    <span className="font-medium text-on-surface">{subtotal.toLocaleString()} HUF</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Campus Pickup</span>
                    <span className="font-medium text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      Service Fee
                      <Icon name="info" size={14} className="cursor-help" />
                    </span>
                    <span className="font-medium text-on-surface">{serviceFee} HUF</span>
                  </div>
                </div>
                <div className="h-px w-full bg-surface-container-high mb-6" />
                <div className="flex justify-between items-end mb-8">
                  <span className="font-headline font-semibold text-lg text-on-surface">Total</span>
                  <span className="font-headline font-bold text-3xl text-primary">
                    {total.toLocaleString()} <span className="text-xl">HUF</span>
                  </span>
                </div>
                <Link
                  href="/orders/confirmation"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="lock" />
                  Secure Checkout
                </Link>

                {/* Trust */}
                <div className="flex flex-col gap-3 mt-6 bg-primary-container/10 p-4 rounded-xl"
                  style={{ border: "1px solid rgba(0,105,71,0.1)" }}
                >
                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="bg-primary-container p-1 rounded-full">
                      <Icon name="verified_user" size={16} className="text-primary" />
                    </span>
                    <span className="font-medium">Verified Student Transaction</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="bg-primary-container p-1 rounded-full">
                      <Icon name="enhanced_encryption" size={16} className="text-primary" />
                    </span>
                    <span className="font-medium">Encrypted Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
