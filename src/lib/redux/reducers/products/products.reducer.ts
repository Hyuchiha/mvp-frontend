import { ProductsState } from "@/lib/redux/models/states/productsState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "@/lib/redux/actions/products.actions";

const INITIAL_STATE: ProductsState = {
  loading: false,
  items: [],
  pagination: null,
}

const productsReducer = createSlice({
  name: PRODUCTS,
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state: ProductsState) => {
      state.loading = true;
    },
    getProductsSuccess: (
      state: ProductsState,
      { payload }: PayloadAction<{ data: any[]; pagination: any }>
    ) => {
      state.loading = false;
      if (payload) {
        state.items = payload.data;
        state.pagination = payload.pagination;
      }
    }
  }
});

export default productsReducer.reducer;