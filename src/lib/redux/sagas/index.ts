import { all, fork } from "@redux-saga/core/effects";
import watchCategories from "@/lib/redux/sagas/categories/categories.sagas";
import watchProducts from "@/lib/redux/sagas/products/products.sagas";

export default function* rootSagas() {
  yield all([
    fork(watchCategories),
    fork(watchProducts),
  ]);
}