// Root store
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import counterReducer from './counterReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    // 쓰실 리듀서 페이지 만드셔서 key 랑 값 하시면 될 거 같아요
  user: userReducer,
  counter: counterReducer,
  cart: cartReducer,
});


export default rootReducer;