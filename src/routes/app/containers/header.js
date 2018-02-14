import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { setCurrentUser, setAuthToken } from './../../../modules/auth/actions';
import { clearAuthToken } from './../../../utils/local-storage';
import './header.css';

export default function Header(props) {
  function logOut() {
    props.dispatch(setCurrentUser(null));
    props.dispatch(setAuthToken(null));
    clearAuthToken();
  }
  const { loggedIn } = props;

  if (loggedIn) {
    return (
      <Navbar fixedTop className="nav-loggedin">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My 14ers</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
            <LinkContainer to="/dashboard">
              <NavItem eventKey={1.1}>Dashboard</NavItem>
            </LinkContainer>

            <LinkContainer to="/add-peak">
              <NavItem eventKey={1.2}>Add Peak</NavItem>
            </LinkContainer>

            <LinkContainer to="/peak-list">
              <NavItem eventKey={1.3}>Peak List</NavItem>
            </LinkContainer>

            <LinkContainer to="/peak-map">
              <NavItem eventKey={1.4}>Peak Map</NavItem>
            </LinkContainer>

            <MenuItem divider />

            <LinkContainer to="/logout">
              <NavItem eventKey={1.5} onClick={logOut}>Logout</NavItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
  return (
    <Navbar fixedTop className="nav-not-loggedin">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">My 14ers</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem eventKey={2}>Login</NavItem>
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
  dispatch: PropTypes.func
};
