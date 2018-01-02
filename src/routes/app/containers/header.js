import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">My 14ers</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} href="/add">Add Peak</MenuItem>
          <MenuItem eventKey={1.2} href="/list">Peak List</MenuItem>
          <MenuItem eventKey={1.3} href="/map">Peak Map</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.4} href="/sign-out">Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
