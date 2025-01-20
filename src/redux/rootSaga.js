// src/redux/rootSaga.js
import { all } from 'redux-saga/effects';
import productSaga from '../features/product/productSaga'; // Correct way to import default export

function* rootSaga() {
  yield all([productSaga()]); // Call productSaga as a function
}
export default rootSaga;