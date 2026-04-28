import Icon from "@/app/components/shared/Icon";
import Link from "next/link";
import { products, bundles } from "@/lib/mock/products";

export const metadata = {
  title: "Products Marketplace",
  description: "Browse verified student essentials — textbooks, electronics, dorm gear, and bundle deals on ADEL.",
};

const categories = [
  { label: "All", active: true },
  { label: "Textbooks", active: false },
  { label: "Electronics", active: false },
  { label: "Dorm Gear", active: false },
  { label: "Fashion", active: false },
  { label: "Bundles", active: false },
];

export default function ProductsMarketplacePage() {
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
          className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-xl font-body text-on-surface focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant border-none outline-none"
        />
      </section>

      {/* Categories */}
      <section className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
              cat.active
                ? "bg-secondary text-on-secondary"
                : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Bundle Highlights */}
      <section>
        <h2 className="font-headline text-xl font-bold text-on-surface mb-6">
          Featured Bundles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.map((bundle) => (
            <Link
              key={bundle.id}
              href={`/marketplace/items/${bundle.id}`}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-all duration-300 flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-1/3 h-40 sm:h-auto bg-gradient-to-br from-secondary/10 to-secondary-container/10 flex items-center justify-center text-secondary relative overflow-hidden">
                <Icon name="inventory_2" size={48} className="opacity-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {bundle.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-headline text-lg font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors">
                  {bundle.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant line-clamp-2 mb-3">
                  {bundle.description}
                </p>
                <span className="font-headline font-bold text-lg text-primary">
                  {bundle.price.toLocaleString()} {bundle.currency}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline text-xl font-bold text-on-surface">
            All Products
          </h2>
          <span className="text-sm text-on-surface-variant font-body">
            {products.length} results
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/marketplace/items/${product.id}`}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="h-48 relative bg-surface-container overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary/5 to-surface-container flex items-center justify-center text-secondary">
                  <Icon name="local_mall" size={48} className="opacity-15 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-surface/80 backdrop-blur-sm text-on-surface text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                {product.condition === "Like New" && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-container/90 backdrop-blur-sm text-on-primary-container text-xs font-bold px-3 py-1 rounded-full">
                      {product.condition}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-headline text-base font-bold text-on-surface mb-1 group-hover:text-secondary transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <p className="font-body text-xs text-on-surface-variant mb-3">
                  by {product.seller.name} •{" "}
                  <Icon name="star" filled size={12} className="text-tertiary inline" />{" "}
                  {product.seller.rating}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-primary">
                    {product.price.toLocaleString()} {product.currency}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <Icon name="visibility" size={14} />
                    {product.views}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
