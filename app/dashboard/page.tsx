import Icon from "@/app/components/shared/Icon";
import Link from "next/link";

const pillars = [
  {
    title: "Products",
    subtitle: "Student-verified essentials",
    icon: "local_mall",
    color: "bg-secondary-container/30 text-secondary",
    href: "/marketplace/products",
    count: "2.4k listings",
  },
  {
    title: "Services",
    subtitle: "Peer-powered services",
    icon: "design_services",
    color: "bg-primary-container/30 text-primary",
    href: "/marketplace/services",
    count: "860 providers",
  },
  {
    title: "Food",
    subtitle: "Campus bites & treats",
    icon: "restaurant",
    color: "bg-tertiary-container/30 text-tertiary",
    href: "/marketplace/food",
    count: "320 dishes",
  },
];

const trending = [
  { title: "Organic Chem Textbook", price: "15,000 HUF", tag: "Products", time: "2h ago" },
  { title: "Box Braids & Twists", price: "15,000 HUF", tag: "Services", time: "4h ago" },
  { title: "Midnight Ramen Kit", price: "2,900 HUF", tag: "Food", time: "1h ago" },
  { title: "Sony WH-1000XM4", price: "65,000 HUF", tag: "Products", time: "6h ago" },
];

export default function DashboardPage() {
  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Greeting */}
      <section>
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
          Good Morning, Curator
        </h1>
        <p className="font-body text-on-surface-variant text-base max-w-xl">
          Your campus marketplace awaits. Browse essentials, discover services,
          or grab a bite — all from verified students around you.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Listings", value: "5", icon: "inventory_2", trend: "+2" },
          { label: "Unread Messages", value: "4", icon: "mark_email_unread", trend: "" },
          { label: "Profile Views", value: "1.2k", icon: "visibility", trend: "+8%" },
          { label: "Wallet Balance", value: "24,500 HUF", icon: "account_balance_wallet", trend: "" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface-container-lowest p-5 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="flex items-start justify-between mb-3">
              <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                {stat.label}
              </p>
              <Icon
                name={stat.icon}
                className="text-primary text-lg"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-2xl font-bold text-on-surface">
                {stat.value}
              </span>
              {stat.trend && (
                <span className="text-xs text-primary bg-primary-container/30 px-2 py-0.5 rounded-full font-medium">
                  {stat.trend}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Marketplace Pillars (Bento Grid) */}
      <section>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-6">
          Explore Marketplace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group bg-surface-container-lowest rounded-2xl p-6 hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${pillar.color}`}
              >
                <Icon name={pillar.icon} className="text-2xl" />
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-1">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mb-4">
                {pillar.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-label font-medium text-outline-variant">
                  {pillar.count}
                </span>
                <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name="arrow_forward" size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline text-xl font-bold text-on-surface">
            Trending Now
          </h2>
          <Link
            href="/marketplace/products"
            className="font-label text-sm text-secondary font-medium hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {trending.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-surface-container-lowest p-4 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="font-headline font-bold text-outline-variant text-sm w-6 text-center">
                  {i + 1}
                </span>
                <div>
                  <p className="font-headline text-sm font-bold text-on-surface">
                    {item.title}
                  </p>
                  <p className="font-body text-xs text-on-surface-variant">
                    {item.time}
                  </p>
                </div>
              </div>
              <div className="text-right flex items-center gap-3">
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                    item.tag === "Food"
                      ? "bg-tertiary-container/30 text-on-tertiary-container"
                      : item.tag === "Services"
                        ? "bg-primary-container/30 text-on-primary-container"
                        : "bg-secondary-container/30 text-on-secondary-container"
                  }`}
                >
                  {item.tag}
                </span>
                <span className="font-headline font-bold text-sm text-primary">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
