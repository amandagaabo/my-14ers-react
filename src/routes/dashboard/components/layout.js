import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import _ from 'lodash';
import './circle.css';
import './layout.css';

export default function Layout(props) {
  if (!props.loggedIn) {
    return <Redirect to="/login" />;
  }

  // get user and all peaks
  const { userPeaks, allPeaks } = props;

  // use all peaks and user unique peaks to calculate percent climbed
  const totalPeaks = allPeaks.length;
  const peaksClimbed = [];
  userPeaks.forEach(peak => peaksClimbed.push(peak.peakName));
  const uniquePeaksClimbed = _.uniq(peaksClimbed);
  const numberClimbed = uniquePeaksClimbed.length;
  const percent = Math.ceil((numberClimbed / totalPeaks) * 100);

  return (
    <main role="main" className="dashboard-container">
      <div className="container dashboard">

        <Col className="circle-chart" xs={12} md={6}>
          <Col className="card">
            <p className="card-title">percent complete</p>
            <div className="center-helper">
              <div className={`progress-circle c100 big blue p${percent}`}>
                <span id="percent">{percent}%</span>
                <div className="slice">
                  <div className="bar" />
                  <div className="fill" />
                </div>
              </div>
            </div>
          </Col>
        </Col>

        <Col className="number-climbed-summary" xs={12} md={6}>
          <Col className="card">
            <p className="card-title">total climbed</p>
            <div className="number-climbed">
              <p className="card-content"> {numberClimbed} / {totalPeaks} peaks</p>
            </div>
          </Col>
        </Col>

        <Col xs={12} md={8} mdOffset={2} className="planning-section">
          <h2> Plan your next hike</h2>
          <p>Ready to hike a 14ers?  A great resource for planning is
            <a
              href="https://www.14ers.com/photos/photos_14ers1.php"
              target="_blank"
              rel="noopener noreferrer"
              className="fourteeners-link"
            >
              14ers.com
            </a>
            , which has route info, photos, weather forcasts, safety tips and maps.
          </p>
        </Col>
      </div>
    </main>
  );
}

Layout.propTypes = {
  userPeaks: PropTypes.array,
  allPeaks: PropTypes.array,
  loggedIn: PropTypes.bool
};

Layout.defaultProps = {
  userPeaks: [],
  allPeaks: [],
  loggedIn: false
};
