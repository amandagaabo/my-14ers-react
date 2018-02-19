import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './layout.css';

export default function Layout() {
  return (
    <main role="main" className="not-found-container">
      <Col xs={12} className="container">
        <h1>Not Found</h1>
        <p>
          The page you are looking for is not here. Check your url or return
          to the <Link to="/" className="home-link">home</Link> page.
        </p>
      </Col>
    </main>
  );
}
