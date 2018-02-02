import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Map from './map';

export default function Layout(props) {
  if (!props.loggedIn) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <main role="main">
      <div className="container">
        <h1 className="page-header">Peak Map</h1>

        <div className="map-container">
          <div className="google-map" id="map">
            <Map {...props} />
          </div>
        </div>

      </div>
    </main>
  );
}

Layout.propTypes = {
  userPeaks: PropTypes.array,
  loggedIn: PropTypes.bool
};

Layout.defaultProps = {
  userPeaks: [],
  loggedIn: false
};
