// import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  if(action.type==='ADD_TO_CART') {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
  }
  else if(action.type==='REMOVE_FROM_CART'){
    return {
    ...state,
    cartItems: [...state.cartItems, action.payload],
    };
  }
  else return state;
};


// export default function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//       ...state,
//       cartItems: [...state.cartItems, action.payload],
//       };
//     default:
//       return state;
//   }
// };

