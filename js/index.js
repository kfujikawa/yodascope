import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Horoscope from './components/Horoscope';
// import GuessList from './components/guess-list';
// import GameContainer from './components/game-container';

import * as actions from './actions/index';
import * as reducers from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    <Horoscope />
  </Provider>,
  document.getElementById('app')
);
// store.subscribe(() => {
//   console.log("store changed");
//   console.log(store.getState());
// });
// store.dispatch(actions.generateNumber(5));
// too low
// store.dispatch(actions.guessNumber(3));
// store.dispatch(actions.winningGuess());
// store.dispatch(actions.highGuess());
// store.dispatch(actions.lowGuess());
// too high
// store.dispatch(actions.guessNumber(55));
// store.dispatch(actions.winningGuess());
// store.dispatch(actions.highGuess());
// store.dispatch(actions.lowGuess());
// repeat guess
// store.dispatch(actions.guessNumber(55));
// store.dispatch(actions.winningGuess());
// store.dispatch(actions.highGuess());
// store.dispatch(actions.lowGuess());
// winning guess
// store.dispatch(actions.guessNumber(5));
// store.dispatch(actions.winningGuess());
// store.dispatch(actions.highGuess());
// store.dispatch(actions.lowGuess());
