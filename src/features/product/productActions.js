// Action types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Action creators
export const fetchproductsrequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchproductssuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchproductsfailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
