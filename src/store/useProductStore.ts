import { create } from "zustand"
import { ProductStoreState } from "../types/types";

const useProductStore = create<ProductStoreState>((set) => ({
  items: [],
  totalPages: 0,
  loading: false,
  error: null,
  selectedProduct: null,
  fetchProducts: async (page) => {
    set({ loading: true });
    try {
      const url = `https://reqres.in/api/products?page=${page}&per_page=5`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ items: data.data, totalPages: data.total_pages, loading: false });
    } catch (error) {
      set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
  },
  fetchProductById: async (id) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://reqres.in/api/products/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      set({ items: [data.data], totalPages: 1, loading: false });
    } catch (error) {
      set({ loading: false, error: error instanceof Error ? error.message : "An unknown error occurred" });
    }
  },
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearError: () => set({ error: null }),
}));

export default useProductStore;
