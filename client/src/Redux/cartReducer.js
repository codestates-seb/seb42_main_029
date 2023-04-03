const initialState = {
  //id, name, count, price
  cartItems: [],
};

export default function cartReducer(state = initialState, action) {
  if(action.type==='ADD_TO_CART') {
    const data = action.payload;
    data.count = 1;
      return {
        ...state,
        cartItems: [...state.cartItems, data ],
      }
  }
  else if(action.type==='REMOVE_FROM_CART'){
    return {
    ...state,
    cartItems: [...state.cartItems, action.payload],
    };
  }
  else if(action.type==='ADD_TO_COUNT'){
    // let result3= state.cartItems.filter(el=>  el.productId === action.payload)
      //let result2= state.cartItems.filter(el=>  el.productId !== action.payload)
      // result3.count+=1;

      //let result4=Object.assign(result2,result3)

      // return Object.assign({},state,{cartItems: result4})
  }
  else return state;
};

