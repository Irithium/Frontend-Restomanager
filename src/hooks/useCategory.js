import { create } from "zustand";

const useCategory = create((set) => ({
  categories: [],
  category: "",
  isCharging: true,

  setCategory: (category) => set({ category }),
  setCategories: (categories) => set({ categories }),
  setIsCharging: () => set({ isCharging: false }),
}));

export default useCategory;
