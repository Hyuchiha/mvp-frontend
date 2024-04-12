const PRODUCTS = 'products';

const ProductsTypes = {
  GET_PRODUCTS: `${PRODUCTS}/getProducts`,
  GET_PRODUCTS_SUCCESS: `${PRODUCTS}/getProductsSuccess`,
}

export function getProducts(page: number = 1, limit: number = 20) {
  return {
    type: ProductsTypes.GET_PRODUCTS,
    payload: {
      page,
      limit
    }
  }
}

export { ProductsTypes, PRODUCTS };