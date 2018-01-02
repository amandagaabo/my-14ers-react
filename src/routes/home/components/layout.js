import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button } from 'react-bootstrap';

export default function Layout() {
  return (
    <main role="main">
      <Col xs={12} className="home-container">
        <h1 className="page-heading">Welcome!</h1>

        <img
          src="https://res.cloudinary.com/amhprojects/image/upload/v1514516746/14ers/mt_belford.jpg"
          alt="mt belford"
          id="welcome-image"
        />

        <p className="new-user-message">
          Looking for a rewarding hike?  Colorado has 58 fourteeners with trails of varying
          lengths and difficulties. Fourteeners (also known as 14ers) are mountains that have
          peaks over 14,000 ft in elevation.  These high altitude hikes can be dangerous, so be
          sure to plan ahead and do your resesarch before tackling one.  A great resource for
          planning is
          <a href="https://www.14ers.com/photos/photos_14ers1.php" rel="noopener noreferrer" target="_blank">
            14ers.com
          </a>,
          which has safety tips, route info, photos, weather forcasts and maps.
        </p>

        <p className="new-user-message">Ready to start logging the 14ers you have completed?</p>

        <Link to="/add-peak">
          <Button id="start-tracking-btn">Add a peak now!</Button>
        </Link>
      </Col>
    </main>
  );
}
