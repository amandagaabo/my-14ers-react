import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
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
            <LinkContainer to="/dashboard">
              <MenuItem eventKey={1.1}>Dashboard</MenuItem>
            </LinkContainer>

            <LinkContainer to="/add-peak">
              <MenuItem eventKey={1.2}>Add Peak</MenuItem>
            </LinkContainer>

            <LinkContainer to="/peak-list">
              <MenuItem eventKey={1.3}>Peak List</MenuItem>
            </LinkContainer>

            <LinkContainer to="/peak-map">
              <MenuItem eventKey={1.4}>Peak Map</MenuItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="/sign-out">
              <MenuItem eventKey={1.5}>Sign Out</MenuItem>
            </LinkContainer>
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
        <LinkContainer to="/sign-in">
          <NavItem eventKey={2}>Sign In</NavItem>
        </LinkContainer>

        <LinkContainer to="/sign-up">
          <NavItem eventKey={3}>Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
