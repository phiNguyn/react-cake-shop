import { create } from "zustand";
import { Category } from "../interface/category";

interface SelectedCategory {
  Category: Category;
  quantity: number;
}

interface CategoryStore {
  Category: Category[];
  selectedCategorys: SelectedCategory[];
  setCategory: (Categorys: Category[]) => void;
  addCategoryNew: (newCategory: Category) => void;
  updateCategory: (updatedCategory: Category) => void;
  getCategoryById: (id: string) => Category | undefined;
}

export const useCategoryStore = create<CategoryStore>((set, get) => ({
  Category: [],
  selectedCategorys: [],
  setCategory: (Category) => set({ Category }),
  addCategoryNew: (newCategory) =>
    set((state) => ({
      Category: [...state.Category, newCategory],
    })),
  updateCategory: (updatedCategory) =>
    set((state) => ({
      Category: state.Category.map((u) =>
        u._id === updatedCategory._id ? updatedCategory : u
      ),
    })),
  getCategoryById: (id) => {
    return get().Category.find((u) => u._id === id);
  },
}));
