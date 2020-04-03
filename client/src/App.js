import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Cars from "./components/pages/Cars";
import NotFound from "./components/pages/NotFound";
import CarsContext from "./context/Cars/carsContext";
import "./App.css";
import Home from "./components/pages/Home";

const App = () => {
  const carsContext = useContext(CarsContext);
  const { clearCars } = carsContext;

  useEffect(() => {
    return () => {
      clearCars();
    };

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/:id" component={Cars} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
