import { create } from "zustand";
export const useShop = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}));
