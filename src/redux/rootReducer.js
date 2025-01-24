import { combineReducers } from 'redux';
import productReducer from '../features/product/productSlice'; // Import product reducer

import userReducer from '../features/user/userSlice';
import adminReducer from '../features/admin/adminSlice';
const rootReducer = combineReducers({
  product: productReducer,
  users:userReducer,
  admin:adminReducer,
});

export default rootReducer;
