import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Navigation from "./js/navigation";
import Example from "./js/reactstrap-navbar";
import Coffee from "./js/coffee";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter,
  Route,
  useHistory,
  hashHistory,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <Navigation />
    <Route exact path="/">
      <Coffee />

      <div>
        <div className="empty-box"></div>
      </div>
    </Route>
    <Route path="/coffee">
      <Coffee />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
