import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";
import configureStore from './store';
import {Navbar,Nav,Button,FormControl,Form} from 'react-bootstrap'

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import TournamentCreate from "./components/TournamentCreate";
import TournamentBracket from "./components/TournamentBracket";
import TournamentJoin from "./components/TournamentJoin";
import ShowTournament from "./components/ShowTournament";
import tournamentBrackets from "./components/tournamentBrackets.js";
import logo from "./logo.png";
import App from "./App";


const store = configureStore();


const routing = (
  <Provider store={store}>
    <Router>

    <Navbar  sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="/"><img src={logo} className="Nav-logo" alt="logo" /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/TournamentCreate" >Create Tournament</Nav.Link>
      <Nav.Link href="/tournaments" >Show Tournaments</Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar>
      
        <Route exact path="/" component={App} />
        <Route exact path="/TournamentJoin" component={TournamentJoin} />
        <Route exact path="/TournamentCreate" component={TournamentCreate} />
        <Route exact path="/tournaments" component={ShowTournament} />
        <Route exact path="/tournaments/:id" component={TournamentBracket} />
        <Route exact path="/TournamentBrackets" component={tournamentBrackets} />
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
