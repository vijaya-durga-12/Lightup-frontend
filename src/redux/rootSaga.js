// src/redux/rootSaga.js
import { all } from "redux-saga/effects";
import productSaga from "../features/product/productSaga"; // Correct way to import default export
import userSaga from "../features/user/userSaga";
import watchAdminCredentials from "../features/admin/adminSaga";
function* rootSaga() {
  yield all([productSaga(), userSaga(), watchAdminCredentials()]); // Call productSaga as a function
}
export default rootSaga;
