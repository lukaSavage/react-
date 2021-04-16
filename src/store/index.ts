import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import rootSaga from './root-saga'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(reducers, process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(sagaMiddleWare)) : applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;