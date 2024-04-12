import { CategoriesState } from "@/lib/redux/models/states/categoriesState";
import { ProductsState } from "@/lib/redux/models/states/productsState";
import { GlobalState } from "@/lib/redux/models/states/globalState";

export interface AppState {
  categories: CategoriesState;
  products: ProductsState;
  global: GlobalState;
}