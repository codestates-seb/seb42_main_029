import { createStore } from 'redux';

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
        cartItems: [],
        };
    // case 'REMOVE_FROM_CART':
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     ),
    //   };

    default:
      return state;
  }
}
// Action->cartReducer
const store = createStore(cartReducer);
// 스토어의 reducer 함수를 초기 reducer 함수로 교체합니다.
// store.replaceReducer(cartReducer);
// RESET 액션을 디스패치하여 스토어의 상태를 초기화합니다.
// store.dispatch({ type: 'RESET' });