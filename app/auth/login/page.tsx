"use client";

import Link from "next/link";
import Icon from "@/app/components/shared/Icon";

export default function LoginPage() {
  return (
    <main className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden min-h-[700px] relative z-10"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}
    >
      {/* Left Side: Editorial Panel */}
      <div className="w-full lg:w-1/2 relative hidden lg:block overflow-hidden bg-linear-to-br from-primary via-primary-dim to-primary">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="w-full h-full bg-[url('/mock/campus.jpg')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <div className="glass-panel p-8 rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
            <h2 className="font-headline text-3xl font-bold text-white mb-4">
              Curate Your Campus Life.
            </h2>
            <p className="font-body text-white/90 text-lg leading-relaxed mb-6">
              Join the premier marketplace exclusive to verified students. Discover,
              trade, and connect within a trusted ecosystem designed for your
              university journey.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <div>
                <div className="font-headline text-2xl font-bold text-primary-container">
                  50k+
                </div>
                <div className="font-body text-sm text-white/80 mt-1">
                  Verified Students
                </div>
              </div>
              <div>
                <div className="font-headline text-2xl font-bold text-primary-container">
                  120+
                </div>
                <div className="font-body text-sm text-white/80 mt-1">
                  Universities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative bg-surface-container-lowest">
        <div className="max-w-md w-full mx-auto">
          {/* Brand Header */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-3">
              ADEL
            </h1>
            <p className="font-headline text-xl text-on-surface-variant font-medium">
              Your Verified Campus Ecosystem
            </p>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 bg-surface-container p-3 rounded-xl w-fit mx-auto lg:mx-0"
            style={{ border: "1px solid rgba(171,173,175,0.15)" }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Icon name="verified_user" filled />
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-on-surface">
                100% Student Verified
              </p>
              <p className="font-body text-xs text-on-surface-variant">
                Exclusive academic network
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/auth/login/password";
            }}
          >
            <div>
              <label
                className="block font-body text-sm font-medium text-on-surface mb-2"
                htmlFor="email-input"
              >
                University Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Icon name="mail" className="text-outline" />
                </div>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  placeholder="student@university.edu"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline border-none outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-linear-to-r from-primary to-primary-dim text-white font-headline font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
            >
              Sign in with University Email
              <Icon name="arrow_forward" className="text-white" />
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 mb-8 flex items-center justify-center gap-4">
            <div className="h-px bg-surface-container-high flex-1" />
            <span className="font-body text-sm text-outline font-medium">
              New to ADEL?
            </span>
            <div className="h-px bg-surface-container-high flex-1" />
          </div>

          {/* Secondary Action */}
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-surface-container-low text-on-surface font-headline font-medium hover:bg-surface-container transition-colors w-full"
            style={{ border: "1px solid rgba(171,173,175,0.15)" }}
          >
            <Icon name="school" className="text-on-surface-variant" />
            Apply for Verification
          </Link>

          {/* Footer Links */}
          <div className="mt-12 text-center text-xs font-body text-outline flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/help" className="hover:text-primary transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
