import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import { Col } from 'react-bootstrap';
import './layout.css';

export default function Layout(props) {
  const { userPeaks } = props;
  let peakPhotoList;
  const dataForList = [];

  if (userPeaks.length === 0) {
    peakPhotoList = 'No peaks logged';
  } else {
    // total peaks in userPeaks
    const peakNumber = userPeaks.length;

    // number of items per row
    const n = 3;
    const rowsNeeded = Math.ceil(peakNumber / n);

    // add rows and peak placeholders to dataForList
    for (let i = 1; i <= rowsNeeded; i += 1) {
      dataForList.push({ row: i, peaks: [] });
      // (`<div class="list-row col-12" id="row${i}"></div>`)
    }

    // add peak data to peaks in dataForList
    let temparray;
    for (let i = 0; i < userPeaks.length; i += n) {
      temparray = userPeaks.slice(i, i + n);

      temparray.forEach((peak) => {
        const formatedDate = moment(peak.dateClimbed).format('MMM D, YYYY');
        const formattedElevation = numeral(peak.elevation).format('0,0');
        const rowNum = Math.ceil((i + 1) / n);
        const index = dataForList.findIndex(i => i.row === rowNum);

        dataForList[index].peaks.push({
          peakName: peak.peak_name,
          rank: peak.rank,
          imgSrc: peak.imgSrc,
          notes: peak.notes,
          id: peak.id,
          date: formatedDate,
          elevation: formattedElevation,
        });
      });
    }

    // use dataForList to generate jsx
    peakPhotoList = dataForList.map((row) => {
      const peaks = row.peaks.map((peak) => {
        return (
          <Col className="mountain-box" xs={12} md={4} key={peak.id}>
            <img src={peak.imgSrc} alt={peak.peakName} className="mountain-photo" />
            <div className="caption">
              <h2 className="caption-header">{peak.peakName} - {peak.elevation}</h2>
              <p className="caption-details">Rank: {peak.rank}</p>
              <p className="caption-details">Date climbed: {peak.date}</p>
              <br />
              <p className="caption-details">{peak.notes}</p>
              <button
                className="button remove-peak"
                data-peak={peak.peak_name}
                data-date={peak.date}
              > x
              </button>
            </div>
          </Col>
        );
      });

      return (
        <Col className="list-row" xs={12} id={row.row} key={row.row}>
          {peaks}
        </Col>
      );
    });
  }

  return (
    <main role="main">
      <div className="container">
        <h1 className="page-header">Peak List</h1>

        <div className="peak-list-container" >
          <div className="list-sort">
            <label htmlFor="sort-by">Sort by: </label>
            <select id="sort-by">
              <option value="date-climbed">Date climbed</option>
              <option value="peak-name">Peak name</option>
              <option value="peak-rank">Peak rank</option>
            </select>
          </div>

          {peakPhotoList}
        </div>

      </div>

    </main>
  );
}

Layout.propTypes = {
  userPeaks: PropTypes.array,
};

Layout.defaultProps = {
  userPeaks: [],
};
