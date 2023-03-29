// import { createStore } from 'redux';
// import {INCREASE, DECREASE} from './'
//상품이미지, 상품이름, 상품가격, 상품id 
const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
      ...state,
      cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};