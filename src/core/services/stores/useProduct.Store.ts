import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "core/consts/mocks";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type State = {
  isLoading: boolean;
  productList: { products: Product[] };
  categories: Category[];
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
  reset: () => void;
};

const initialState = {
  isLoading: false,
  productList: { products: [] },
  categories: [],
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
