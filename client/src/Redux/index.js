
import { combineReducers } from 'redux';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  // 쓰실 리듀서 페이지 만드셔서 key 랑 값 하시면 될 거 같아요
});


export default rootReducer;