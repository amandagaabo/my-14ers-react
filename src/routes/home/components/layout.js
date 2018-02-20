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

        <Col className="container">
          <Col className="home-info" sm={12} md={4}>
            <img
              src="https://res.cloudinary.com/amhprojects/image/upload/v1518746408/14ers/hiker-blue.png"
              alt="hiker"
              className="home-icon"
            />
            <h2>Hike a 14er</h2>
            <p>
              There are 58 mountains in Colorado with peaks that are at least 14,000 ft.
              There are rewarding, difficult hikes to the tops of these peaks.
              Choose one, prepare for it and hike it!
            </p>
          </Col>

          <Col className="home-info" sm={12} md={4}>
            <img
              src="https://res.cloudinary.com/amhprojects/image/upload/v1518746408/14ers/checklist-blue.png"
              alt="checklist"
              className="home-icon"
            />
            <h2>Mark it complete</h2>
            <p>
              Use my14ers to keep track of the 14ers you have hiked. Add a peak to your completed list
              after you finish hiking it. Include the date you climbed it and add some notes if you want.
            </p>
          </Col>

          <Col className="home-info" sm={12} md={4}>
            <img
              src="https://res.cloudinary.com/amhprojects/image/upload/v1518746408/14ers/high-five-blue.png"
              alt="high-five"
              className="home-icon"
            />
            <h2>Hike them all!</h2>
            <p>
              Lots of people who live in Colorado have a goal to hike all of the Colorado 14ers.
              Make it your goal too and track your progress as you complete each peak
              on your my14ers dashboard.
            </p>
          </Col>
        </Col>
      </Col>
    </main>
  );
}
