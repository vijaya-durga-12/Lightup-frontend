import { combineReducers } from 'redux';
import productReducer from '../features/product/productSlice'; // Import product reducer
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice';
const rootReducer = combineReducers({
  products: productReducer,
  users:userReducer,
  cart:cartReducer
});

export default rootReducer;
