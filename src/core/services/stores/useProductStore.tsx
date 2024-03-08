import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "core/consts/mocks";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type State = {
  isLoading: boolean;
  productList: { products: Product[] };
  product: Product | null;
  cart: Cart[];
  categories: Category[];
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
  getProductById: (id: string) => Promise<void>;
  reset: () => void;
};

const initialState = {
  isLoading: false,
  productList: { products: [] },
  categories: [],
  product: null,
  cart: [],
};

const useProductStore = create<State>()(
  devtools(
    persist(
      (set, get): State => ({
        ...initialState,
        getProducts: async () => {
          set({ isLoading: true });

          set({ productList: { products: MOCK_PRODUCTS } });

          set({ isLoading: false });
        },
        getCategories: async () => {
          set({ isLoading: true });

          set({ categories: MOCK_CATEGORIES });

          set({ isLoading: false });
        },
        getProductById: async (id) => {
          set({ isLoading: true });

          set({ product: MOCK_PRODUCTS[0] });

          set({ isLoading: false });
        },
        reset: () => {
          set({ ...initialState });
        },
      }),
      {
        name: "productStore",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useProductStore;
