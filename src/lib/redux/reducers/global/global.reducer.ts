import { GlobalState } from "@/lib/redux/models/states/globalState";
import { createSlice } from "@reduxjs/toolkit";
import { GLOBAL, showLoader } from "@/lib/redux/actions/global.actions";

const INITIAL_STATE: GlobalState = {
  showLoader: false
};

const globalReducer = createSlice({
  name: GLOBAL,
  initialState: INITIAL_STATE,
  reducers: {
    showLoader: (state: GlobalState) => {
      state.showLoader  = true;
    },
    hideLoader: (state: GlobalState) => {
      state.showLoader  = false;
    }
  }
})

export default globalReducer.reducer;
