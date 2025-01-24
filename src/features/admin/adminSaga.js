import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_ADMIN_DATA, fetchadmindata } from './adminActions';

// Worker saga: fetch admin credentials from .env
function* loadAdminCredentials() {
  try {
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    // Dispatch action to set the credentials in the Redux state
    yield put(fetchadmindata({ email: adminEmail, password: adminPassword }));
  } catch (error) {
    console.error("Failed to load admin credentials", error);
  }
}

// Watcher saga: listens for the FETCH_ADMIN_DATA action
function* watchAdminCredentials() {
  yield takeEvery(FETCH_ADMIN_DATA, loadAdminCredentials);
}

export default watchAdminCredentials;
