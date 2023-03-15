import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import userReducer from "./Redux/userReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootReducer = combineReducers({
  user: userReducer,
});
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
