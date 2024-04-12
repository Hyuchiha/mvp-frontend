const GLOBAL = 'global';

const GlobalActions = {
  SHOW_LOADER: `${GLOBAL}/showLoader`,
  HIDE_LOADER: `${GLOBAL}/hideLoader`,
}

export function showLoader() {
  return {
    type: GlobalActions.SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: GlobalActions.HIDE_LOADER
  }
}

export { GlobalActions, GLOBAL };