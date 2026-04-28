import Icon from "@/app/components/shared/Icon";
import Link from "next/link";

const pillars = [
  {
    title: "Products",
    subtitle: "Student-verified textbooks, electronics, and dorm essentials",
    icon: "local_mall",
    color: "bg-secondary-container/30 text-secondary",
    href: "/marketplace/products",
  },
  {
    title: "Services",
    subtitle: "Peer-powered tutoring, styling, and creative skills",
    icon: "design_services",
    color: "bg-primary-container/30 text-primary",
    href: "/marketplace/services",
  },
  {
    title: "Food",
    subtitle: "Homemade campus bites and cultural delicacies",
    icon: "restaurant",
    color: "bg-tertiary-container/30 text-tertiary",
    href: "/marketplace/food",
  },
];

const stats = [
  { value: "50k+", label: "Verified Students" },
  { value: "120+", label: "Universities" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-panel">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tight text-primary font-headline">
            ADEL
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/marketplace/products" className="font-body text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/marketplace/services" className="font-body text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/marketplace/food" className="font-body text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">
              Food
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="hidden sm:inline-flex font-headline text-sm font-semibold text-primary hover:text-primary-dim transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/login"
              className="py-2.5 px-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-headline font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all"
              style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 right-[-5%] w-[35vw] h-[35vw] rounded-full bg-primary-container/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary-container/15 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-container/15 px-4 py-2 rounded-full mb-8">
            <Icon name="verified_user" filled size={16} className="text-primary" />
            <span className="font-label text-sm font-semibold text-primary">
              100% Student Verified
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight mb-6 max-w-4xl mx-auto">
            The Campus Marketplace for{" "}
            <span className="gradient-text">Verified Students</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover essentials, book peer services, and grab local bites — all
            within a trusted community exclusive to your university.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/auth/login"
              className="py-4 px-8 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
              style={{ boxShadow: "0 8px 24px rgba(0,105,71,0.2)" }}
            >
              Join ADEL Free
              <Icon name="arrow_forward" />
            </Link>
            <Link
              href="/dashboard"
              className="py-4 px-8 rounded-full bg-surface-container-lowest text-on-surface font-headline font-semibold text-lg hover:bg-surface-container-low transition-colors flex items-center gap-2"
              style={{ border: "1px solid rgba(171,173,175,0.15)" }}
            >
              Explore Marketplace
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  {s.value}
                </div>
                <div className="font-body text-sm text-on-surface-variant">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-4">
              Three Pillars of Campus Life
            </h2>
            <p className="font-body text-on-surface-variant max-w-xl mx-auto">
              Everything you need, from one trusted platform — curated by and for students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group p-8 rounded-3xl bg-background hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${pillar.color}`}>
                  <Icon name={pillar.icon} size={28} />
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                  {pillar.subtitle}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-headline font-semibold text-sm group-hover:gap-2 transition-all">
                  Explore
                  <Icon name="arrow_forward" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary-dim to-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <Icon name="shield" filled size={48} className="text-primary-container mb-6" />
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4">
              Built on Trust & Verification
            </h2>
            <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Every member is verified through their university email. Transactions are secured with escrow protection.
            </p>
            <Link
              href="/auth/login"
              className="inline-flex py-4 px-8 rounded-full bg-white text-primary font-headline font-bold text-lg hover:bg-primary-container transition-colors active:scale-[0.98]"
            >
              Get Verified Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-headline text-xl font-black text-primary">ADEL</span>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              The Academic Curator — Campus Marketplace
            </p>
          </div>
          <div className="flex gap-6 text-sm text-on-surface-variant font-body">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/help" className="hover:text-primary transition-colors">Help</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
