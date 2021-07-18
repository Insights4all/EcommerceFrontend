import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const userinitialState = {
  username: "Safiya",
  userid: 10,
  isLoggedin: false,
  lastValues: [],
};
const userreducer = (state = userinitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        ...state,
        isLoggedin: action.payload.isLoggedin,
        username: action.payload.username,
        userid: action.payload.userid,

        lastValues: [...state.lastValues, action.payload],
      };
      break;
  }
  return state;
};

const initialState = {
  add: 10,
  subtract: 12,
  lastValues: [],
};

const mathreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        add: state.add + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        subtract: action.payload - 5,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
  }
  return state;
};

const store = createStore(combineReducers({ mathreducer, userreducer }));
store.subscribe(() => {
  console.log("Store Update", store.getState());
});

store.dispatch({
  type: "LOGIN",
  payload: { username: "rehan", userid: 20, isLoggedin: true },
});

store.dispatch({
  type: "ADD",
  payload: 15,
});
store.dispatch({
  type: "SUBTRACT",
  payload: 10,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
