import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Checkin from "./Component/Checkin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only when the app loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ->", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkin">
            <Checkin />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
