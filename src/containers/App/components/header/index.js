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
          <MenuItem eventKey={1.1}><Link to="/add">Add Peak</Link></MenuItem>
          <MenuItem eventKey={1.2}><Link to="/list">Peak List</Link></MenuItem>
          <MenuItem eventKey={1.3}><Link to="/map">Peak Map</Link></MenuItem>
          <MenuItem eventKey={1.4}>Sign Out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
