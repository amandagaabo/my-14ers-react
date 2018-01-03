import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export default function Layout(props) {
  return (
    <main role="main" className="container">
      <Col xs={12} className="peak-list-container">
        <h1 className="page-header">Peak List</h1>

      </Col>
    </main>
  );
}

Layout.propTypes = {
  userPeaks: PropTypes.array,
  allPeaks: PropTypes.array,
};

Layout.defaultProps = {
  userPeaks: [],
  allPeaks: [],
};
