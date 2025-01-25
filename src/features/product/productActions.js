// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export const SET_SELECTED_PRODUCT='SET_SELECTED_PRODUCT' 
// Action Creators
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
export const setSelectedProduct = (products) => {
  return {
    type: 'SET_SELECTED_PRODUCT',
    payload: products,
  };
};

// Action to fetch a product by ID


