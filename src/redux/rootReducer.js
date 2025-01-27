import { combineReducers } from 'redux';
import productReducer from '../features/product/productSlice'; // Import product reducer

import userReducer from '../features/user/userSlice';
const rootReducer = combineReducers({
  products: productReducer,
  users:userReducer
});

export default rootReducer;
