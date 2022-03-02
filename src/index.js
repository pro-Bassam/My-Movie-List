import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./store/configureStore";
// import configureStore from "./store/configureStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { userAdmind, userRegistered } from "./store/users";
import { userAuthenticated } from "./store/auth";

//STORE
// const store = configureStore();
store.dispatch(
  userRegistered({
    username: "user1@domain.com",
    password: "123456",
    name: "Admin",
  })
);

store.dispatch(userAdmind({ id: 1 }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

console.log("store ", store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
