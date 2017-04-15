import * as actions from '../actions';

const initialRepositoryState = [];

export const horoscopeReducer = (state = {initialRepositoryState}, action) => {
  switch (action.type) {
  	// case ADD_SIGN:
  	// 	return [...state, {
  	// 		sign: action.sign,
  	// 		horoscope: null
  	// 	}];

  //   case actions.FETCH_HOROSCOPE_SUCCESS:
		// const index = state.findIndex(repository =>
	 //        repository.name === action.repository
	 //    );

	 //    const before = state.slice(0, index);
	 //    const after = state.slice(index + 1):
	 //    const newHoroscope = Object.assign({}, state[index], {
	 //    	horoscope: action.horoscope
	 //    });
	 //    return [...before, newHoroscope, ...after];

    default:
      return state;

  }
};