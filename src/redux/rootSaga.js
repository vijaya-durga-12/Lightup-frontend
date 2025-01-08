import { all } from 'redux-saga/effects';
import productSaga from '../features/product/productSaga'; 

function* rootSaga() {
  yield all([productSaga()]); 
}

export default rootSaga;
