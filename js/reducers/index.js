import * as actions from '../actions';

const initialRepositoryState = [];

export const horoscopeReducer = (state = {initialRepositoryState}, action) => {
  switch (action.type) {
    case actions.GET_SIGN:
      return Object.assign({}, state, {
        sign: [...state.sign]
      });
    case actions.CHANGE_SIGN:
    	return Object.assign({}, state, {
    		sign: [...state.sign, action.sign]
    	});

    default:
      return state;

  }
};