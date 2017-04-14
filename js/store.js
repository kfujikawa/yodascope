import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { horoscopeReducer } from './reducers/index';

const store = createStore(horoscopeReducer, applyMiddleware(thunk));

export default store;