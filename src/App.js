import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import UserLogin from "./components/Users/UserLogin";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import "./skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Higher Order Component so all routes will use same layout
import MainLayout from "./HigherOrderComponents/MainLayout";

const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <MainLayout>
          <NavBar />
          <Switch>
            <Route path="/log-in" component={UserLogin} />
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Home} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
