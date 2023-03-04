import React, { useReducer } from 'react';

import ShopContext from './shopContext';
import ShopReducer from './shopReducer';

import { GET_COFFEE_SHOPS, SET_LOADING } from './types';

const ShopState = (props) => {
  const initialState = {
    coffeeShops: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ShopReducer, initialState);

  //   Get Coffee Shops
  const getCoffeeShops = async () => {
    setLoading();
    const res = await fetch('http://localhost:4000/api/coffeeshops');
    const data = await res.json();

    dispatch({
      type: GET_COFFEE_SHOPS,
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ShopContext.Provider
      value={{
        coffeeShops: state.coffeeShops,
        loading: state.loading,
        getCoffeeShops,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
