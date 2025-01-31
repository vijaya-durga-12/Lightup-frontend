// src/redux/rootSaga.js
import { all } from 'redux-saga/effects';
import productSaga from '../features/product/productSaga'; // Correct way to import default export
import userSaga from '../features/user/userSaga';

function* rootSaga() {
  yield all([productSaga(),userSaga(),]); // Call productSaga as a function
}
export default rootSaga;