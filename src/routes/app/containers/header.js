import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import './header.css';

export default function Header(props) {
  const { loggedIn } = props;

  if (loggedIn) {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My 14ers</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1} href="/dashboard">Dashboard</MenuItem>
            <MenuItem eventKey={1.2} href="/add-peak">Add Peak</MenuItem>
            <MenuItem eventKey={1.3} href="/peak-list">Peak List</MenuItem>
            <MenuItem eventKey={1.4} href="/peak-map">Peak Map</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.5} href="/sign-out">Sign Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">My 14ers</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={2} href="/sign-in">Sign In</NavItem>
        <NavItem eventKey={3} href="/sign-up">Sign Up</NavItem>
      </Nav>
    </Navbar>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
