// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <TransitionGroup className="transition-group">
        <Switch>
          <Route exact path="/">
            <CSSTransition timeout={300} classNames="fade" key="home">
              <Home />
            </CSSTransition>
          </Route>
          <Route path="/about">
            <CSSTransition timeout={300} classNames="fade" key="about">
              <About />
            </CSSTransition>
          </Route>
          <Route path="/contact">
            <CSSTransition timeout={300} classNames="fade" key="contact">
              <Contact />
            </CSSTransition>
          </Route>
        </Switch>
      </TransitionGroup>
    </Router>
  );
}

export default App;
