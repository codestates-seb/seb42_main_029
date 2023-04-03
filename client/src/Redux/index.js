// Root store
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,

  counter: counterReducer,
  cart: cartReducer,
});

export default rootReducer;
