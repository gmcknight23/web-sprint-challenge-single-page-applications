import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Pizza from "./components/Pizza";
import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  const [order, setOrder] = useState([]);

  const orderSubmit = (newOrder) => {
    setOrder([...order, newOrder]);
  };

  useEffect(() => {}, [order]);

  return (
    <div className="App">
      <header>
        <Link to="/" id="pizza-form">
          Home
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <Link to="/pizza" id="order-pizza">
            Pizza?
          </Link>
        </Route>
        <Route path="/pizza">
          <Pizza orderSubmit={orderSubmit} />
        </Route>
      </Switch>
    </div>

    /* <button onClick={routeToPizza} className="pizza-button" id="order-pizza">
        Pizza?
      </button> */
  );
};
export default App;
