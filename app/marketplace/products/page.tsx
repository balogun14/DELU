"use client";

import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { products, bundles } from "@/lib/mock/products";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Textbooks",
  "Electronics",
  "Dorm Gear",
  "Fashion",
  "Bundles",
];

export default function ProductsMarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const filteredBundles = useMemo(() => {
    if (activeCategory !== "All" && activeCategory !== "Bundles") return [];
    return bundles.filter((b) => 
      b.title.toLowerCase().includes(search.toLowerCase()) || 
      b.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, activeCategory]);

  return (
    <div className="px-6 md:px-12 py-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <section>
        <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
          Products
        </h1>
        <p className="font-body text-on-surface-variant text-base">
          Student-verified essentials, textbooks, electronics, and bundle deals.
        </p>
      </section>

      {/* Search */}
      <section className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="search" className="text-outline-variant" />
        </div>
        <input
          type="text"
          placeholder="Search products, textbooks, gear..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant shadow-sm border-none outline-none"
        />
      </section>

      {/* Categories */}
      <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-secondary text-on-secondary shadow-md shadow-secondary/20"
                : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Results Container */}
      <div className="space-y-12">
        {/* Bundles Section */}
        <AnimatePresence>
          {filteredBundles.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h2 className="font-headline text-xl font-bold text-on-surface mb-6">
                Featured Bundles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredBundles.map((bundle) => (
                  <Link
                    key={bundle.id}
                    href={`/marketplace/items/${bundle.id}`}
                    className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 flex flex-col sm:flex-row shadow-sm hover:shadow-md"
                  >
                    <div className="w-full sm:w-1/3 h-40 sm:h-auto bg-surface-container relative overflow-hidden shrink-0">
                      <img src={bundle.image} alt={bundle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {bundle.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline text-lg font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">
                          {bundle.title}
                        </h3>
                        <p className="font-body text-sm text-on-surface-variant line-clamp-2 mb-3">
                          {bundle.description}
                        </p>
                      </div>
                      <span className="font-headline font-bold text-lg text-primary">
                        {bundle.price.toLocaleString()} {bundle.currency}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-xl font-bold text-on-surface">
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <span className="text-sm text-on-surface-variant font-body font-medium">
              {filteredProducts.length} results
            </span>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/marketplace/items/${product.id}`}
                      className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 block shadow-sm hover:shadow-md"
                    >
                      <div className="h-48 relative bg-surface-container overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="bg-surface/80 backdrop-blur-sm text-on-surface text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        {product.condition === "Like New" && (
                          <div className="absolute top-3 right-3">
                            <span className="bg-primary-container/90 backdrop-blur-sm text-on-primary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                              {product.condition}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-headline text-base font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors line-clamp-1">
                          {product.title}
                        </h3>
                        <p className="font-body text-xs text-on-surface-variant mb-4">
                          by {product.seller.name} •{" "}
                          <Icon name="star" filled size={12} className="text-tertiary inline mb-0.5" />{" "}
                          {product.seller.rating}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-headline font-bold text-lg text-primary">
                            {product.price.toLocaleString()} {product.currency}
                          </span>
                          <div className="flex items-center gap-2 text-xs font-bold text-outline-variant uppercase tracking-widest">
                            <Icon name="visibility" size={14} />
                            {product.views}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-surface-container-lowest rounded-3xl">
                  <Icon name="search_off" size={64} className="text-outline-variant mb-4 mx-auto" />
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">No products found</h3>
                  <p className="font-body text-on-surface-variant">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
