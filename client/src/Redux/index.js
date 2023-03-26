import { combineReducers } from "redux";
import userReducer from "./userReducer";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  counter: counterReducer,
});

export default rootReducer;
