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
      <Col xs={12} className="home-content container">
        <h1>Your 14er checklist</h1>
        <Col xs={12} md={4}>
          <img
            src="https://res.cloudinary.com/amhprojects/image/upload/v1518643033/14ers/hiker-icon.png"
            alt="hiker"
            className="home-icon"
          />
          <p>Hike a Colorado 14er</p>
        </Col>

        <Col xs={12} md={4}>
          <img
            src="https://res.cloudinary.com/amhprojects/image/upload/v1518643137/14ers/checklist-icon.png"
            alt="checklist"
            className="home-icon"
          />
          <p>Mark it as complted</p>
        </Col>

        <Col xs={12} md={4}>
          <img
            src="https://res.cloudinary.com/amhprojects/image/upload/v1518642680/14ers/high-five-icon.svg"
            alt="high-five"
            className="home-icon"
          />
          <p>Hike them all!</p>
        </Col>
      </Col>
    </main>
  );
}
