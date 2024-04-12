import { configureStore } from "@reduxjs/toolkit";

/* Instruments */
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSagas from "@/lib/redux/sagas";
import { getCategories } from "@/lib/redux/actions/categories.actions";

const sagaMiddleware = createSagaMiddleware();

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true,
    }).concat(sagaMiddleware)
  },
});

sagaMiddleware.run(rootSagas);
setTimeout(() => {
  reduxStore.dispatch(getCategories());
})

export { reduxStore };