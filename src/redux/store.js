import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Import rootReducer
import rootSaga from './rootSaga'; // Import rootSaga

const sagaMiddleware = createSagaMiddleware(); // Create saga middleware

const store = createStore(
  rootReducer, // Set the rootReducer
  applyMiddleware(sagaMiddleware) // Apply saga middleware
);

sagaMiddleware.run(rootSaga); // Run rootSaga

export default store;
    