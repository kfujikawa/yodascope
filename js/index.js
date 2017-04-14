import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Horoscope from './components/Horoscope';

// import * as actions from './actions/index';
// import * as reducers from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    <Horoscope />
  </Provider>,
  document.getElementById('app')
);