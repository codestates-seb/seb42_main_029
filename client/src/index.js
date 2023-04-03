import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import userReducer from "./Redux/userReducer";
import rootReducer from "./Redux/index.js";
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persisted);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: getDefaultMiddleware -> 직렬화 방지 경고문 삭제
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store); // redux store 생성

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
