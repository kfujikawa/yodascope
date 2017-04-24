import * as actions from '../actions';

export const horoscopeReducer = (state = {horoscope: ""}, action) => {
  switch (action.type) {
    case actions.FETCH_HOROSCOPE_SUCCESS:
      return Object.assign({}, state, { 
      	horoscope: action.horoscope      
      });

    case actions.FETCH_HOROSCOPE_ERROR:
      throw new Error('Could not find horoscope');
      return state;

    default:
      return state;
  }
};
