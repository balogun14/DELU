"use client";

import Icon from "@/app/components/shared/Icon";
import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
  {
    id: "profile",
    title: "Account Profile",
    icon: "person",
    fields: [
      { label: "Display Name", value: "Curator Alex", type: "text" },
      { label: "University Email", value: "alex.c@bme.hu", type: "email", disabled: true },
      { label: "Phone Number", value: "+36 30 123 4567", type: "tel" },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: "notifications",
    toggles: [
      { label: "Email Notifications", description: "Get updates on your orders and messages", default: true },
      { label: "SMS Alerts", description: "Receive a text when a meetup is confirmed", default: false },
      { label: "Newsletter", description: "Bi-weekly campus marketplace highlights", default: true },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: "security",
    actions: [
      { label: "Change Password", description: "Last changed 3 months ago", icon: "lock_reset" },
      { label: "Two-Factor Auth", description: "Not enabled", icon: "phonelink_lock" },
      { label: "Active Sessions", description: "2 devices logged in", icon: "devices" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="px-6 md:px-12 py-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 space-y-2">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface mb-8">
          Settings
        </h1>
        <nav className="space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-semibold transition-all ${
                activeTab === s.id
                  ? "bg-primary-container/20 text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              <Icon name={s.icon} filled={activeTab === s.id} />
              {s.title}
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm font-semibold text-error hover:bg-error/5 transition-all mt-4">
            <Icon name="logout" />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {sections.find(s => s.id === activeTab)?.fields && (
            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="font-headline text-xl font-bold text-on-surface">Profile Details</h2>
              <div className="grid grid-cols-1 gap-6">
                {sections.find(s => s.id === activeTab)?.fields?.map((f, i) => (
                  <div key={i} className="space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      defaultValue={f.value}
                      disabled={f.disabled}
                      className="w-full px-4 py-3.5 bg-surface-container-lowest rounded-xl font-body text-sm text-on-surface border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                    />
                  </div>
                ))}
              </div>
              <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-label text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                Save Changes
              </button>
            </motion.section>
          )}

          {sections.find(s => s.id === activeTab)?.toggles && (
            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="font-headline text-xl font-bold text-on-surface">Notification Preferences</h2>
              <div className="space-y-1">
                {sections.find(s => s.id === activeTab)?.toggles?.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="space-y-0.5">
                      <p className="font-headline text-sm font-bold text-on-surface">{t.label}</p>
                      <p className="font-body text-xs text-on-surface-variant">{t.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${t.default ? 'bg-primary' : 'bg-outline-variant'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${t.default ? 'left-7' : 'left-1'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {sections.find(s => s.id === activeTab)?.actions && (
            <motion.section variants={itemVariants} className="space-y-6">
              <h2 className="font-headline text-xl font-bold text-on-surface">Security & Privacy</h2>
              <div className="space-y-1">
                {sections.find(s => s.id === activeTab)?.actions?.map((a, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-low transition-colors group text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        <Icon name={a.icon} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="font-headline text-sm font-bold text-on-surface">{a.label}</p>
                        <p className="font-body text-xs text-on-surface-variant">{a.description}</p>
                      </div>
                    </div>
                    <Icon name="chevron_right" className="text-outline-variant group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>
      </main>
    </div>
  );
}
