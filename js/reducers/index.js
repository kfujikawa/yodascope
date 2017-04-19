import * as actions from '../actions';

export const horoscopeReducer = (state = [], action) => {
  console.log('I come from horoscopeReducer');
  switch (action.type) {
    case actions.FETCH_HOROSCOPE_SUCCESS:
      // you will attach horoscope to the store / state
      console.log('FETCH_HOROSCOPE_SUCCESS');
      return Object.assign({}, state, { 
      	horoscope: action.horoscope      
      });

    case actions.FETCH_HOROSCOPE_FAILURE:
      // you will attach an error
      throw new Error('Could not find horoscope');
      return state;

    case actions.FETCH_YODA_SUCCESS:
      // you will attach horoscope to the store / state
      console.log('FETCH_YODA_SUCCESS');
      return Object.assign({}, state, { 
      	yodascope: action.yodascope      
      });

    case actions.FETCH_YODA_FAILURE:
      // you will attach an error
      throw new Error('Could not find yodascope');
      return state;

    default:
      return state;
  }
};
