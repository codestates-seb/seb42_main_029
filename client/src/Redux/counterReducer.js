// 액션 생성
const INCREASE = "COUNTER/INCREASE";
const DECREASE = "COUNTER/DECREASE";

// 액션 생성 함수
export const increaseNum = () => {
  return { type: INCREASE };
};

export const decreaseNum = () => {
  return { type: DECREASE };
};

// 초기 설정
const initState = {
  num: 0,
};

// 리듀서
export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        num: state.num + 1,
      };
    case DECREASE:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return {
        ...state,
      };
  }
}