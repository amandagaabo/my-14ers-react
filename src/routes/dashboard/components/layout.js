import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './circle.css';
import './layout.css';

export default function Layout(props) {
  // get user and all peaks
  const { userPeaks, allPeaks } = props;

  // use all peaks and user unique peaks to calculate percent climbed
  const totalPeaks = allPeaks.length;
  const peaksClimbed = [];
  userPeaks.forEach(peak => peaksClimbed.push(peak.peak_name));
  const uniquePeaksClimbed = _.uniq(peaksClimbed);
  const numberClimbed = uniquePeaksClimbed.length;
  const percent = Math.ceil((numberClimbed / totalPeaks) * 100);

  return (
    <main role="main">
      <div className="container">
        <h1 className="page-header">Summary of Colorado 14ers Climbed</h1>

        <div className="circle-chart" xs={12} >
          <div id="progress-circle" className={`c100 big black p${percent}`}>
            <span id="percent">{percent}%</span>
            <div className="slice">
              <div className="bar" />
              <div className="fill" />
            </div>
          </div>
        </div>

        <p className="number-climbed-summary">
          <span id="number-climbed">{numberClimbed}</span> out
          of <span id="number-total">{totalPeaks}</span> peaks
        </p>

        <h2 className="divider-header"> Plan your next hike</h2>
        <p>A great resource for planning is
          <a
            href="https://www.14ers.com/photos/photos_14ers1.php"
            target="_blank"
            rel="noopener noreferrer"
          >
             14ers.com
          </a>
          , which has safety tips, route info, photos, weather forcasts and maps.
        </p>
      </div>
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
