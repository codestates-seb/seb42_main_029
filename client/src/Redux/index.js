
// Root store
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import counterReducer from './counterReducer';

import userReducer from "./userReducer";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,

  counter: counterReducer,
  cart: cartReducer,

});

export default rootReducer;
