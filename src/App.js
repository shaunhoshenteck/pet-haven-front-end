import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Higher Order Component so all routes will use same layout
import MainLayout from "./HigherOrderComponents/MainLayout";

const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
