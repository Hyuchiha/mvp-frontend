import { combineSlices } from "@reduxjs/toolkit";
import categoriesReducer from "@/lib/redux/reducers/categories/categories.reducer";
import productsReducer from "@/lib/redux/reducers/products/products.reducer";
import globalReducer from "@/lib/redux/reducers/global/global.reducer";

const rootReducer = combineSlices({
  categories: categoriesReducer,
  products: productsReducer,
  global: globalReducer,
});

export default rootReducer;