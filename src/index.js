import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";
import configureStore from './store';

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import TournamentCreate from "./components/TournamentCreate";
import TournamentJoin from "./components/TournamentJoin";
import ShowTournament from "./components/ShowTournament";
import App from "./App";


const store = configureStore();


const routing = (
  <Provider store={store}>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/TournamentCreate">Create Tournament</Link>
        </li>
        <li>
          <Link to="/TournamentJoin">Join Tournament</Link>
        </li>
        <li>
          <Link to="/TournamentShow">Tournaments</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/TournamentJoin" component={TournamentJoin} />
      <Route path="/TournamentCreate" component={TournamentCreate} />
      <Route path="/TournamentShow" component={ShowTournament} />
    </div>
  </Router>
   </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
