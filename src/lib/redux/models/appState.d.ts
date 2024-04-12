import { CategoriesState } from "@/lib/redux/models/states/categoriesState";
import { ProductsState } from "@/lib/redux/models/states/productsState";

export interface AppState {
  categories: CategoriesState;
  products: ProductsState;
}