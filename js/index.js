// const React = require('react');
// const ReactDOM = require('react-dom');
// const Provider = require('react-redux');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// const store = require('./store');
// const Horoscope = require('./components/Horoscope');

import store from './store';
import Horoscope from './components/Horoscope';

// import * as actions from './actions/index';
// import * as reducers from './reducers/index';

// ReactDOM.render(routes, document.getElementById('app'));

ReactDOM.render(<Provider store={store}><Horoscope /></Provider>,
  document.getElementById('app')
);