import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  Form
} from 'react-bootstrap';
import { fetchAllForms } from '../actions';
import logo from "../logo.png";

function AppNavigation(props) {
  useEffect(() => props.fetchAllForms(), []);

  return (
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
  );
}

export default connect(null, { fetchAllForms })(AppNavigation);
