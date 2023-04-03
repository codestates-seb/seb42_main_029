// 초기값 설정
const initState = {
  count: 0,
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
// 장바구니의 상품id와 +, -를 클릭한 상품의 id가 동일하면 증가/감소 함수 실행
export default function counterReducer(state = initState, action) {
  
  
  if(action.type==='INCREASE' ) {
    return {
        ...state,
        count: state.count + 1,
      }
    }
    else if(action.type==='DECREASE'){
      return {
        ...state,
        count: state.count - 1,
      };
    }
    else return state;
  }