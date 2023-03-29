// 초기값 설정
const initState = {
  Quantity: 0,
  ProductId: 0,
  /*
   * 질문) Axios에서 받아온 값을 stroe에 저장해서 사용해도 되는가?
   * {
   *  product_id2:, 
   *  name:,
   *  count:
   * }
   */
};

export default function counterReducer(state = initState, action) {
  if(action.type==='INCREASE') {
      return {
        ...state,
        Quantity: state.Quantity + 1,
      }
    }
    else if(action.type==='DECREASE'){
      return {
        ...state,
        Quantity: state.Quantity - 1,
      };
    }
    else return state;
  }