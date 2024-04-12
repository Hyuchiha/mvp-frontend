const CATEGORIES = 'categories';

const CategoriesTypes = {
  GET_CATEGORIES: `${CATEGORIES}/getCategories`,
  GET_CATEGORIES_SUCCESS: `${CATEGORIES}/getCategoriesSuccess`,
}

export function getCategories() {
  return {
    type: CategoriesTypes.GET_CATEGORIES
  }
}

export { CategoriesTypes, CATEGORIES };