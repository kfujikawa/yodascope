import * as actions from '../actions';

export const horoscopeReducer = (state = { horoscope: [] }, action) => {
  switch (action.type) {
    case actions.HOROSCOPE:
      return Object.assign({}, state, {
        horoscope: [...state.horoscope, action.horoscope]
      });

    default:
      return state;

  }
};