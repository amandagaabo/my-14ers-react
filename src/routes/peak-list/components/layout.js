import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import './layout.css';

export default function Layout(props) {
  function onSortChange(e) {
    const sortBy = e.target.value;
    props.onSortSelect(sortBy);
  }

  function onDeleteClick(itemID) {
    const token = props.authToken;
    props.onDeletePeak(token, itemID);
  }

  const { userPeaks } = props;
  let peakPhotoList;

  if (userPeaks.length === 0) {
    peakPhotoList = '';
  } else {
    // generage JSX for each row
    peakPhotoList = userPeaks.map((row) => {
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
                data-peak={peak.peakName}
                data-date={peak.date}
                onClick={() => onDeleteClick(peak.id)}
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
            <select id="sort-by" onChange={e => onSortChange(e)} value={props.sortBy}>
              <option value="DATE_CLIMBED">Date climbed</option>
              <option value="PEAK_NAME">Peak name</option>
              <option value="RANK">Peak rank</option>
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
  authToken: PropTypes.string,
  sortBy: PropTypes.string,
  onDeletePeak: PropTypes.func,
  onSortSelect: PropTypes.func,
};

Layout.defaultProps = {
  userPeaks: [],
  authToken: null,
  sortBy: 'DATE_CLIMBED',
  onDeletePeak: () => {},
  onSortSelect: () => {},
};
