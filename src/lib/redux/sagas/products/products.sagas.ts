import HttpClient from "@/lib/axios/httpClient";
import { all, put, takeLatest } from "@redux-saga/core/effects";
import { ProductsTypes } from "@/lib/redux/actions/products.actions";
import { GlobalActions } from "@/lib/redux/actions/global.actions";

function* getProducts(action: any) {
  try {
    // @ts-ignore
    const response = yield HttpClient.get('/products', { params: action.payload });

    yield put({
      type: GlobalActions.HIDE_LOADER,
    })

    yield put({
      type: ProductsTypes.GET_PRODUCTS_SUCCESS,
      payload: response.data
    });

  } catch (err) {
    console.log("Error getting products", err);
  }
}

export default function* watchProducts() {
  yield all([
    takeLatest(ProductsTypes.GET_PRODUCTS, getProducts)
  ])
}