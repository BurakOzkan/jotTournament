import React from "react";
import logo from "./logo.png";
import "./App.css";
import {Button,ButtonToolbar} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonToolbar>
  <Button href="/TournamentCreate" variant="info" size="lg">
    Create Tournament
  </Button>
  &nbsp;
  <Button href="/tournaments" variant="warning" size="lg">
    Show Tournaments
  </Button>
</ButtonToolbar>
      </header>
    </div>
  );
}

export default App;
