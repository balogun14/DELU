"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import TopNav from "@/app/components/shared/TopNav";
import BottomNav from "@/app/components/shared/BottomNav";
import SideNav from "@/app/components/shared/SideNav";
import { useState } from "react";

const categories = [
  { id: "products", label: "Products", icon: "inventory_2", description: "Textbooks, electronics, dorm gear" },
  { id: "services", label: "Services", icon: "design_services", description: "Tutoring, hair, creative skills" },
  { id: "food", label: "Food & Drink", icon: "restaurant", description: "Homemade meals, baked goods" },
];

const steps = ["Category", "Details", "Photos", "Review"];

export default function SellNewPage() {
  const [step, setStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 bg-background pb-24 md:pb-0">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
                List a New Item
              </h1>
              <p className="font-body text-on-surface-variant text-sm">
                Share your products, services, or food with the campus community.
              </p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    i <= step ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant"
                  }`}>
                    {i < step ? <Icon name="check" size={16} /> : i + 1}
                  </div>
                  <span className={`text-xs font-medium hidden sm:block ${
                    i <= step ? "text-primary" : "text-on-surface-variant"
                  }`}>
                    {s}
                  </span>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 rounded-full ${
                      i < step ? "bg-primary" : "bg-surface-container-high"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-headline text-xl font-bold text-on-surface">
                  What are you listing?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-6 rounded-2xl text-left transition-all ${
                        selectedCategory === cat.id
                          ? "bg-primary-container/20 ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : "bg-surface-container-lowest hover:bg-surface-container-low"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        cat.id === "food"
                          ? "bg-tertiary-container/30 text-tertiary"
                          : cat.id === "services"
                            ? "bg-primary-container/30 text-primary"
                            : "bg-secondary-container/30 text-secondary"
                      }`}>
                        <Icon name={cat.icon} size={24} />
                      </div>
                      <h3 className="font-headline text-base font-bold text-on-surface mb-1">{cat.label}</h3>
                      <p className="font-body text-xs text-on-surface-variant">{cat.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-headline text-xl font-bold text-on-surface">Item Details</h2>
                <div>
                  <label className="block font-body text-sm font-medium text-on-surface mb-2" htmlFor="title">Title</label>
                  <input id="title" type="text" placeholder="e.g., Organic Chemistry Textbook, 8th Edition" className="w-full py-4 px-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline border-none outline-none" />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-on-surface mb-2" htmlFor="description">Description</label>
                  <textarea id="description" rows={4} placeholder="Describe your item — condition, features, and any details buyers should know." className="w-full py-4 px-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline border-none outline-none resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-on-surface mb-2" htmlFor="price">Price (HUF)</label>
                    <input id="price" type="number" placeholder="15,000" className="w-full py-4 px-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline border-none outline-none" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-on-surface mb-2" htmlFor="condition">Condition</label>
                    <select id="condition" className="w-full py-4 px-4 bg-surface-container-highest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 border-none outline-none">
                      <option>Like New</option>
                      <option>Used — Good</option>
                      <option>Used — Fair</option>
                      <option>Fresh (Food)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-headline text-xl font-bold text-on-surface">Add Photos</h2>
                <div className="border-2 border-dashed border-outline-variant/40 rounded-2xl p-12 flex flex-col items-center justify-center text-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer">
                  <Icon name="cloud_upload" size={48} className="text-primary/40 mb-4" />
                  <p className="font-headline font-bold text-on-surface mb-1">Drag photos here</p>
                  <p className="font-body text-sm text-on-surface-variant">or click to browse — up to 5 images</p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-headline text-xl font-bold text-on-surface">Review & Publish</h2>
                <div className="bg-surface-container-lowest rounded-2xl p-6 space-y-4">
                  <p className="font-body text-on-surface-variant text-sm">
                    Review your listing details before publishing. Your listing will be reviewed by our team for approval.
                  </p>
                  <div className="bg-primary-container/10 p-4 rounded-xl flex items-start gap-3">
                    <Icon name="info" className="text-primary shrink-0" />
                    <p className="font-body text-sm text-on-surface">
                      <strong>Note:</strong> Food listings require kitchen safety verification. You&apos;ll receive instructions after submission.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="py-3 px-6 rounded-full bg-surface-container text-on-surface font-headline font-medium hover:bg-surface-container-high transition-colors flex items-center gap-2">
                  <Icon name="arrow_back" size={18} />
                  Back
                </button>
              ) : (
                <Link href="/dashboard" className="py-3 px-6 rounded-full bg-surface-container text-on-surface font-headline font-medium hover:bg-surface-container-high transition-colors flex items-center gap-2">
                  <Icon name="arrow_back" size={18} />
                  Cancel
                </Link>
              )}
              <button
                onClick={() => {
                  if (step < steps.length - 1) setStep(step + 1);
                }}
                disabled={step === 0 && !selectedCategory}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-primary to-primary-dim text-white font-headline font-semibold hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 4px 14px rgba(0,105,71,0.2)" }}
              >
                {step === steps.length - 1 ? "Publish Listing" : "Continue"}
                <Icon name="arrow_forward" size={18} />
              </button>
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
