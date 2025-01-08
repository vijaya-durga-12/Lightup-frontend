import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST} from './productActions';
import { fetchproductsfailure, fetchproductssuccess } from './productActions'; // Import action creators
import axios from 'axios';

const fetchTheapi = async () => {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    return response.data.products; // Assuming the API response has a `products` field
  };
  

function* fetchProductSaga() {
  try {
    const products = yield call(fetchTheapi); // Now it returns only the `products` array
    yield put(fetchproductssuccess(products));
  } catch (error) {
    yield put(fetchproductsfailure(error.message));
  }
}
export default function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductSaga);
}
