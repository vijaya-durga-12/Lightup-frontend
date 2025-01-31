import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_USERS_REQUEST, fetchUserssuccess, fetchusersfailuer } from "../user/userActions";

// Fetch API function
const fetchapi = async () => {
    try {
      const response = await fetch('http://192.168.1.6:3000/api/users/all');
      const data = await response.json();
      console.log("API Response:", data); 
      return data.users; 
    } catch (error) {
      console.error("API Fetch Error:", error.message); 
      throw new Error('Failed to fetch users: ' + error.message);
    }
  };


function* usersSaga() {
    try {
      const users = yield call(fetchapi);
      yield put(fetchUserssuccess(users)); 
    } catch (error) {
      yield put(fetchusersfailuer(error.message));
    }
  }
// Watcher Saga
export default function* userSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, usersSaga);
}
