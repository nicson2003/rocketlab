/*import { createStore } from 'redux';
import rootReducer from './reducers';

const store1 = createStore(rootReducer);

//export default store;
*/

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
