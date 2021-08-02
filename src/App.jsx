import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/header/Navbar";
import { Home, Login, Register, NotFoundPage } from "./pages/index";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default App;
