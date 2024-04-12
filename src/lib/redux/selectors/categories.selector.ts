import { AppState } from "@/lib/redux/models/appState";
import { createSelector } from "reselect";
import { CategoriesState } from "@/lib/redux/models/states/categoriesState";

export const selectCoreCategoriesState = (state: AppState) => state.categories;
export const selectCategories = createSelector(selectCoreCategoriesState, (state: CategoriesState) => state.items);