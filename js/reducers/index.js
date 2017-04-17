import * as actions from '../actions';

export const horoscopeReducer = (state = [], action) => {
  console.log('I come from a reducer');
  switch (action.type) {
    case actions.FETCH_HOROSCOPE_SUCCESS:
      // you will attach horoscope to the store / state
      console.log('FETCH SUCCESS');
      return Object.assign({}, state, { horoscope: action.horoscope });

    case actions.FETCH_HOROSCOPE_FAILURE:
      // you will attach an error
      return;

    default:
      return state;
  }
};
