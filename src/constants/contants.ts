export const IS_PROD = process.env.NODE_ENV === 'production';

export const SERVER_PATH_BASE = !IS_PROD ? 'https://mvp-macropay-backend-dedb66927c0b.herokuapp.com' : 'http://localhost:3000'

export const API_PATH = `${SERVER_PATH_BASE}/v1`