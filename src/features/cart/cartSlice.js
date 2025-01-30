import { FETCH_CART_PRODUCTSEND_SUCCESS } from "./cartActions";

const initialState ={
  cartProduct:[]
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_CART_PRODUCTSEND_SUCCESS:
      console.log(action.payload)
      return { ...state, cartProduct: action.payload };
    default:
      return state; // Always return state for unhandled actions
  }
};

export default cartReducer;