import { AppState } from "@/lib/redux/models/appState";
import { createSelector } from "reselect";
import { ProductsState } from "@/lib/redux/models/states/productsState";

export const selectCoreProductsState = (state: AppState) => state.products;

export const selectProductsLoading = createSelector(selectCoreProductsState, (state: ProductsState) => state.loading);
export const selectProductsList = createSelector(selectCoreProductsState, (state: ProductsState) => state.items);
export const selectProductsPagination = createSelector(selectCoreProductsState, (state: ProductsState) => state.pagination);