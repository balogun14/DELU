/* ─── Mock Data: Products ─── */

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  condition: string;
  seller: { name: string; avatar: string; rating: number; reviews: number; verified: boolean };
  tags: string[];
  views: number;
  favorites: number;
  featured?: boolean;
  badge?: string;
}

export interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  condition: string;
  seller: { name: string; avatar: string; rating: number; reviews: number; verified: boolean };
  badge?: string;
  tags: string[];
  views: number;
  favorites: number;
}

export const products: Product[] = [
  {
    id: "prod-1",
    title: "Organic Chemistry, 8th Edition (Wade)",
    description: "The gold standard for Organic Chemistry. Includes clear diagrams and comprehensive practice problems. Minimal highlighting.",
    price: 15000,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBflUzjX80Ig2lLJTLvD9QG51RNBiYOnTZddn6IM24tz4267CYsJNuo7Gi0eIHW6QM4jtjyf1ycoIrBE213LvktYZnevp_mPGRaIY7YcAMeyXmZTfmVQ_EZF7gmvfDrQ7808Av3-GBwqDYn2nmJHZOAnyb94VWjSJzCvMR59zwCNE_x4UmBCelBrmaM04wVUb9KXu_RqlZRhD6xOb43ZFwNJ5jkPvnZZ-xtCUQsEhXQPn3QhAPH07Kx3aD6mV2STXd0AB1IWwO4Qg9t",
    category: "Textbooks",
    condition: "Like New",
    seller: { name: "Alex C.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOQc-Lb1OOz8xLryhyC0PiOLBdEkcM5tCiCm64j5OA_uoNVOTsc48JGx_2cPfiYsH1bGx_Ua0J45KqhTk0-nWa4CGNupjUa4jDWs9L4_fluWFioJ0Tg8f877LgJXCnJtJbGcOlrTV4Tm88DF-7-mQkrgZfPJwD2QQHuZ4-8Qu4A3yKrjcLLLQWk0QO_rOmp-0dTnksW2RWtCttwoEj10eh9CpAZX52R4Jy2czGvgONbFmP3TL-eYxJIsNXecvvPWnLZecWhGknvTKH", rating: 4.9, reviews: 42, verified: true },
    tags: ["Like New", "Negotiable"],
    views: 128,
    favorites: 4,
  },
  {
    id: "prod-2",
    title: "Sony WH-1000XM4 Noise Cancelling",
    description: "Industry-leading noise cancellation. 30-hour battery life. Foldable design with touch controls.",
    price: 65000,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4F2IUaJmpKwWPLU9XrQJNJrCKdJJhLrZH-MvTTfmFXDk9laONYMnxds--Cu2iZ8ow2KatQSgiv8JugTJIHR2lSrGA5rokuPWfB5Cd2d_s-uDDfEZNHPJ1HanC8mDHWIW7BeqsHAh_TSFqheMcVDka9cOvZJzWBH7SPXs-h7ShZp_4LhAMRPLIvWfVbiMEPYRpc35AFpYuRltz7kJHh5EOol8FawoJXUo7MAtRrVYbm7gad2xIYQ-2oN0pg4MBAM7sjnunZYIdvDi",
    category: "Electronics",
    condition: "Like New",
    seller: { name: "David M.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUsvwZ5ossbAs1Svkm73uSrC3ATEzLftlmZAp2Xa_IJzkEDk5q_dI3Y-wAdOxwruNhotRqXd8ChS7BHffcg7o3KKnTMoIo63OVkAHNiM1YI5BE5gvTEDXULjqHBbHVTFbDtJjIovTp6zUZqwUo_r6xfniPgnN3utMyP5ySGFqHDsrYRUlzI3o98aj9lbHZ5lGL7VXj93FnIfsGAlIbKAsVWxFwv6iDlyqqbdEAcMkVlsvmyGkXftmcpzKym5xeOxbii-yr-DeOgzN9", rating: 5.0, reviews: 18, verified: true },
    tags: ["Like New"],
    views: 342,
    favorites: 12,
  },
  {
    id: "prod-3",
    title: "Gorenje Mini Fridge 43L (Silver)",
    description: "Compact fridge for dorm rooms. Energy efficient, quiet operation. Includes freezer compartment.",
    price: 30000,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgWQicV7-qMd0yVJQ1Db6rv6LJ9obU6CUVpsHawKat_SA2QGBapIwRJCYQTgNjtnPvpITivHPzW1-VyTdg6H1dsr04-uuMfHta06EhSX8uISVyqKWlRRVpdOYeGZxhjIJQh-_4yHngG8M_dbhZHJdyf_e9vGO1YWlFz-KDWCKTY8tv6y5kD2vbGHv3IzTbzu4iVuFUyQBE4wGs3W-k7UkIV2TmAMTvQGZ3ZDtAfoU745yErDYSctgG4PBhqBLMJAIVm_n1bG87tS_4",
    category: "Dorm Gear",
    condition: "Used",
    seller: { name: "Sarah K.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLsnGnOj3MrsObMyjEpMfbt60peEF_LwgcrKMjeIxWhycJmmyl4eaMHGNjePW_bF9lM0h_mixZahz_4nagcL6ItOgsydz75fpNTtRJ3vaOFvS8oFWxktDCbQCHQAYkUM2hXvGZ1rfndApli9XlCxZdlWM0wsyuO4JnyNXBoU9UiGpCCU8weu2i2oLFn9CMzX5N-BMwEzt_NvOMP2Zlfi9romEnpH8xPSnLiXkTi84UV8K5FowDDkXRnuCzFNT899gV8unnRi7KKHre", rating: 4.7, reviews: 9, verified: true },
    tags: ["Leaving Sale"],
    views: 210,
    favorites: 8,
  },
  {
    id: "prod-4",
    title: "IKEA FORSÅ Desk Lamp, Black",
    description: "Classic desk lamp with adjustable arm and head. Perfect for late-night study sessions.",
    price: 4500,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzgdNKeAPF7UDNO675Ops1qFDsAU0q0M5BKmky1mIGoLQDRaDGCjr1MMLPLj-3G1aWwc5ADGVdSfN_jU2D2f4GAScTxjlSqZG7-EFdC_qwMTCje68uDVKqvvkika9X9PQtDEaVcefAXBu8zPE6uYPAHBV42R9Hy1BW3bVl8J8Rgm4B1XnqjxH9v46ZrOiH8L1rHyi9PTVaomgKfhY6LvIee_naJ_NFHnBEMFB2mf7PO8H07eRQUgl1fEmVQaFhmqjIPkik8g4jGlN1",
    category: "Dorm Gear",
    condition: "Used",
    seller: { name: "Elena R.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlCWFpUpMVb4dcoE6Jul80U6oshoNgVISJxN1SHrnQs5edF9KYk9pu3CLYwusDxouEwsiC_TLksEt_xTlXODWUk70OUFZBZPtZf7Ydm_-syNKIPWZxvmK14Z5XyLeEMTPmix1K5WkrFFIicd_esF9KYwrkyzyNymfMMbaagCvZC3TOlhWrHPKuSdYrSSb_YFXRUco5yOlMwcNuORu5CqLFZ19CgsbBvsScmQ-68MgoxlMmirSJ2S5pOwS8impv55LZTogCbvKKScA_", rating: 4.9, reviews: 5, verified: true },
    tags: ["Used"],
    views: 95,
    favorites: 3,
  },
];

export const bundles: Bundle[] = [
  {
    id: "bundle-1",
    title: "Graduation Dorm Pack",
    description: "Complete set: Desk lamp, mini-fridge, ergonomic chair, and storage bins. Perfect for incoming freshmen.",
    price: 120000,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJCsmqaZy6whkNMPGkUjjHuX7znKFJy8nPPxMvqRpijZb_6jgx5Se9WYc0stcjw11pLZjh11BLqHUVAgaV3Y1c6kj4uC5GII553o6FFTCliGNiF1ra-0HCp-b5g9uGD1H1B-i25rqnhYthDwFQSHeGcr9KB72pyGAumzwDimtV37eqUKvqyf3C6xZcYTRxlK2MGDwOoq2DhrNxkshPzESuE9q7C0DkOgtYubqK1G3sNS6FxL0Zq1F41nd47qaVYxw99VkHKMlwCA0H",
    category: "Bundles",
    condition: "Various",
    seller: { name: "David M.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUsvwZ5ossbAs1Svkm73uSrC3ATEzLftlmZAp2Xa_IJzkEDk5q_dI3Y-wAdOxwruNhotRqXd8ChS7BHffcg7o3KKnTMoIo63OVkAHNiM1YI5BE5gvTEDXULjqHBbHVTFbDtJjIovTp6zUZqwUo_r6xfniPgnN3utMyP5ySGFqHDsrYRUlzI3o98aj9lbHZ5lGL7VXj93FnIfsGAlIbKAsVWxFwv6iDlyqqbdEAcMkVlsvmyGkXftmcpzKym5xeOxbii-yr-DeOgzN9", rating: 5.0, reviews: 18, verified: true },
    badge: "Featured Bundle",
    tags: ["Bundle", "Full Set"],
    views: 450,
    favorites: 24,
  },
  {
    id: "bundle-2",
    title: "Kitchen Starter Kit",
    description: "Microwave, electric kettle, basic cookware, and plates. Barely used, moving out of country.",
    price: 45000,
    currency: "HUF",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwrpetPEAE85Nryv6N3Doni9eYzmpUYHfzfdMErAYDXykeJb5RWsjAThuHHLfW8Fmytsa-T4xaRfFskX_bRPSbnUrIEQlOQwMShxWl2VTWWIINCbjVBNnjg0OQd3o3hv3h0Zm820TWdoZbDrQzx77aZIULsJANVmuze6xHfUEaKmhU6K0ErKaxLGXltNOO7ROvyf0dwkM85yuSKxrx9TI5zMoay0ejrwGdjp3dqw3R-2VdyJfcAhPGl_cgBYC651_A8tdaUdb_xT2w",
    category: "Bundles",
    condition: "Used",
    seller: { name: "Sarah K.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLsnGnOj3MrsObMyjEpMfbt60peEF_LwgcrKMjeIxWhycJmmyl4eaMHGNjePW_bF9lM0h_mixZahz_4nagcL6ItOgsydz75fpNTtRJ3vaOFvS8oFWxktDCbQCHQAYkUM2hXvGZ1rfndApli9XlCxZdlWM0wsyuO4JnyNXBoU9UiGpCCU8weu2i2oLFn9CMzX5N-BMwEzt_NvOMP2Zlfi9romEnpH8xPSnLiXkTi84UV8K5FowDDkXRnuCzFNT899gV8unnRi7KKHre", rating: 4.7, reviews: 9, verified: true },
    badge: "Hot Deal",
    tags: ["Kitchen", "Starter"],
    views: 280,
    favorites: 15,
  },
];

