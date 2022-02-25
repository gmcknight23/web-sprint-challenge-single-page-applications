import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Pizza from "./components/Pizza";
import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  // const history = useHistory();

  // const routeToPizza = () => {
  //   history.push("/Pizza");
  // };

  return (
    <div className="App">
      <header>
        <Link to="/" id="order-pizza">
          Home
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <Link to="/Pizza" id="pizza-form">
            Pizza?
          </Link>
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>
      </Switch>
    </div>

    /* <button onClick={routeToPizza} className="pizza-button" id="order-pizza">
        Pizza?
      </button> */
  );
};
export default App;
