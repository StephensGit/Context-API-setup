import { GET_COFFEE_SHOPS, SET_LOADING } from './types';

const shopReducer = (state, action) => {
  switch (action.type) {
    case GET_COFFEE_SHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default shopReducer;
