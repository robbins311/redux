import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./exercise";
import { legacy_createStore } from "redux";
import rootReducer from "./modules";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(rootReducer);
console.log(store.getState());
root.render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
