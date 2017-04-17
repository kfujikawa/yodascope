import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Horoscope from './components/Horoscope';

ReactDOM.render(
  <Provider store={store}><Horoscope /></Provider>,
  document.getElementById('app')
);
