import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import {
  addOrder,
  getCategories,
  getOrderById,
  getProductById,
  getProducts,
} from "../api/product.api";
import notification from "core/helpers/notification";

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
  order: OrderDetail | null;
  getProducts: (
    category?: string,
    page?: number,
    count?: number,
  ) => Promise<void>;
  getCategories: () => Promise<void>;
  getProductById: (id: string) => Promise<void>;
  addToCart: (product: Product, quantity: number) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  placeOrder: (order: NewOrder) => Promise<any>;
  getOrderById: (orderId: string) => Promise<any>;
  clearCart: () => Promise<void>;
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
  order: null,
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

          var res = await getProductById(id);

          set({ product: res?.data?.data });

          set({ isLoading: false });
        },
        getOrderById: async (orderId) => {
          set({ isLoading: true });

          var res = await getOrderById(orderId);

          set({ order: res?.data?.data });

          set({ isLoading: false });
        },
        addToCart: async (product, quantity) => {
          set((state) => ({
            cart: state.cart.some((x) => x.productId == product?.id)
              ? state.cart?.map((item) =>
                  item.productId === product?.id
                    ? {
                        product,
                        productId: product?.id,
                        quantity: +quantity,
                      }
                    : item,
                )
              : [
                  ...state.cart,
                  {
                    product,
                    productId: product?.id,
                    quantity: +quantity,
                  },
                ],
          }));
        },
        placeOrder: async (order) => {
          set({ isLoading: true });

          var res = await addOrder(order);

          if (res?.data?.success) set({ cart: [] });

          notification({
            type: res?.data?.success ? "success" : "danger",
            message: res?.data?.message,
          });

          set({ isLoading: false });

          return res?.data;
        },
        removeFromCart: async (id) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.productId !== id),
          }));
        },
        clearCart: async () => {
          set({ cart: [] });
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
