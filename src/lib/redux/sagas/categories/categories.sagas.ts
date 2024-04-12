import HttpClient from "@/lib/axios/httpClient";
import { all, put, takeLatest } from "@redux-saga/core/effects";
import { CategoriesTypes } from "@/lib/redux/actions/categories.actions";

function* getCategories() {
  try {

    // @ts-ignore
    const response = yield HttpClient.get('/categories');

    yield put({
      type: CategoriesTypes.GET_CATEGORIES_SUCCESS,
      payload: response.data
    });

  } catch (err) {
    console.log("Error getting categories", err);
  }
}

export default function* watchCategories() {
  yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories)
  ]);
}