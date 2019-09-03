import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { fetchAllForms } from './actions';
import configureStore from './store';

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import TournamentCreate from "./components/TournamentCreate";
import TournamentBracket from "./components/TournamentBracket";
import TournamentJoin from "./components/TournamentJoin";
import ShowTournament from "./components/ShowTournament";
import tournamentBrackets from "./components/tournamentBrackets.js";
import App from "./App";


const store = configureStore();

function AppRoutes(props) {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/TournamentJoin" component={TournamentJoin} />
        <Route exact path="/TournamentCreate" component={TournamentCreate} />
        <Route exact path="/tournaments" component={ShowTournament} />
        <Route exact path="/tournaments/:id" component={TournamentBracket} />
        <Route exact path="/TournamentBrackets" component={tournamentBrackets} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(
  <AppRoutes />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
