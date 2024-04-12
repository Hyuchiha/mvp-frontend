import { combineSlices } from "@reduxjs/toolkit";
import categoriesReducer from "@/lib/redux/reducers/categories/categories.reducer";
import productsReducer from "@/lib/redux/reducers/products/products.reducer";

const rootReducer = combineSlices({
  categories: categoriesReducer,
  products: productsReducer,
});

export default rootReducer;