import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const reducer = (state, action) => {
  if (action.type === "change") {
    return "aaa";
  }
  if (action.type === "delete") {
    return " ";
  }

  return "rrr";
};

const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
