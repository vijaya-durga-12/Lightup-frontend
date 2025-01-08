import { combineReducers } from 'redux';
import productReducer from '../features/product/productSlice'; // Import product reducer

const rootReducer = combineReducers({
  product: productReducer, // Combine product reducer
});

export default rootReducer;
