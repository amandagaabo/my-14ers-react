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
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
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

              <LinkContainer to="/logout">
                <MenuItem eventKey={1.5} onClick={logOut}>Logout</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar fixedTop className="nav-not-loggedin">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">My 14ers</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem eventKey={2}>Login</NavItem>
          </LinkContainer>

          <LinkContainer to="/sign-up">
            <NavItem eventKey={3}>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func
};
