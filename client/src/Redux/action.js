// 액션함수
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item
});
