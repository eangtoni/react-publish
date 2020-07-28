import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Navigation from "./js/navigation";
import Coffee, { CoffeeStyle } from "./js/coffee";
import About from "./js/about";
import My404Component from "./js/my404Component";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter,
  Link,
  Route,
  useHistory,
  Redirect,
  Switch,
} from "react-router-dom";

ReactDOM.render(
  <div>
    {/* <Navigation /> */}
    <BrowserRouter basename="/" history={useHistory}>
      <Switch>
        <Route exact path="/" component={Coffee}></Route>

        <Route path="/coffee">
          <Switch>
            <Route exact path="/coffee" component={Coffee}></Route>

            <Route path={`/coffee/:styleName?`}>
              <Switch>
                <Route
                  exact
                  path={`/coffee/:styleName?`}
                  component={CoffeeStyle}
                ></Route>

                <Route path="*">
                  <Redirect to="/404"></Redirect>
                </Route>
              </Switch>
            </Route>
          </Switch>
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/404">
          <My404Component />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
