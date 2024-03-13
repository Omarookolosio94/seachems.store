import { MOCK_PRODUCTS } from "core/consts/mocks";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { getCategories, getProducts } from "../api/product.api";

type State = {
  isLoading: boolean;
  productList: {
    products: Product[];
    totalPage: number;
    currentPage: number;
    totalItem: number;
  };
  product: Product | null;
  cart: Cart[];
  categories: Category[];
  getProducts: (
    category?: string,
    page?: number,
    count?: number,
  ) => Promise<void>;
  getCategories: () => Promise<void>;
  getProductById: (id: string) => Promise<void>;
  addToCart: (product: Product, quantity: number) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  reset: () => void;
};

const initialState = {
  isLoading: false,
  productList: {
    products: [],
    totalPage: 1,
    currentPage: 1,
    totalItem: 0,
  },
  categories: [],
  product: null,
  cart: [],
};

const useProductStore = create<State>()(
  devtools(
    persist(
      (set, get): State => ({
        ...initialState,
        getProducts: async (category, page, count) => {
          set({ isLoading: true });

          var res = await getProducts(category!, page!, count!);

          set({
            productList: {
              products: res?.data?.data?.items,
              currentPage: res?.data?.data?.currentPage,
              totalItem: res?.data?.data?.totalItem,
              totalPage: res?.data?.data?.totalPage,
            },
          });

          set({ isLoading: false });
        },
        getCategories: async () => {
          set({ isLoading: true });

          var res = await getCategories();

          set({ categories: res?.data?.data });

          set({ isLoading: false });
        },
        getProductById: async (id) => {
          set({ isLoading: true });

          set({ product: MOCK_PRODUCTS[0] });

          set({ isLoading: false });
        },
        addToCart: async (product, quantity) => {
          set((state) => ({
            cart: [
              ...state.cart,
              {
                product,
                productId: product?.id,
                quantity: +quantity,
              },
            ],
          }));
        },
        removeFromCart: async (id) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.productId !== id),
          }));
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
