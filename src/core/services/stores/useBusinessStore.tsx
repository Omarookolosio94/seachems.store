import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type State = {
  isLoading: boolean;
  reset: () => void;
};

const initialState = {
  isLoading: false,
};

const useBusinessStore = create<State>()(
  devtools(
    persist(
      (set, get): State => ({
        ...initialState,
        reset: () => {
          set({ ...initialState });
        },
      }),
      {
        name: "businessStore",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useBusinessStore;
