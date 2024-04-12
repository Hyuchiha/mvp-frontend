import { CategoriesState } from "@/lib/redux/models/states/categoriesState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORIES } from "@/lib/redux/actions/categories.actions";

const INITIAL_STATE: CategoriesState = {
  items: []
}

const categoriesReducer = createSlice({
  name: CATEGORIES,
  initialState: INITIAL_STATE,
  reducers: {
    getCategoriesSuccess: (
      state: CategoriesState,
      { payload }: PayloadAction<any[]>
    ) => {
      if (payload) {
        state.items = payload;
      }
    }
  }
});

export default categoriesReducer.reducer;