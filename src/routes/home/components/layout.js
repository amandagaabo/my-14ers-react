import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import './layout.css';

export default function Layout() {
  return (
    <main role="main" className="home">
      <Jumbotron>
        <div className="container">
          <h1>Track your Colorado 14ers</h1>
        </div>
      </Jumbotron>
      <Col xs={12} className="home-content">
        <h1>Three section info goes here</h1>
      </Col>
    </main>
  );
}
