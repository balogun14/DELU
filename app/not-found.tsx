"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "@/app/components/shared/Icon";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="relative">
          <div className="text-[120px] font-headline font-extrabold text-surface-container-highest leading-none opacity-50">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
              <Icon name="search_off" size={48} />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-headline text-3xl font-bold text-on-surface">Page Not Found</h1>
          <p className="font-body text-on-surface-variant text-lg">
            The page you're looking for has moved to a different dorm or never existed in the first place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/marketplace/products"
            className="px-8 py-3 rounded-full bg-primary text-on-primary font-headline font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Browse Marketplace
          </Link>
          <Link 
            href="/dashboard"
            className="px-8 py-3 rounded-full bg-surface-container-high text-on-surface font-headline font-bold hover:bg-surface-container-highest transition-all"
          >
            Back to Dashboard
          </Link>
        </div>

        <p className="text-xs text-on-surface-variant/60 font-body">
          Think this is a mistake? <Link href="/help" className="underline hover:text-primary transition-colors">Contact student support</Link>
        </p>
      </motion.div>
    </div>
  );
}
