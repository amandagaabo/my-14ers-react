import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import numeral from 'numeral';
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
  const dataForList = [];

  if (userPeaks.length === 0) {
    peakPhotoList = '';
  } else {
    // total peaks in userPeaks
    const peakNumber = userPeaks.length;

    // number of items per row
    const n = 3;
    const rowsNeeded = Math.ceil(peakNumber / n);

    // add rows and peak placeholders to dataForList
    for (let i = 1; i <= rowsNeeded; i += 1) {
      dataForList.push({ row: i, peaks: [] });
    }

    // add peak data to peaks in dataForList
    let temparray;
    for (let i = 0; i < userPeaks.length; i += n) {
      temparray = userPeaks.slice(i, i + n);

      temparray.forEach((peak) => {
        const formatedDate = dateFormat(peak.dateClimbed, 'mmm d, yyyy');
        const formattedElevation = numeral(peak.elevation).format('0,0');
        const rowNum = Math.ceil((i + 1) / n);
        const index = dataForList.findIndex(i => i.row === rowNum);

        dataForList[index].peaks.push({
          peakName: peak.peakName,
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
  onDeletePeak: PropTypes.func,
  onSortSelect: PropTypes.func,
  sortBy: PropTypes.string,
};

Layout.defaultProps = {
  userPeaks: [],
  authToken: null,
  onDeletePeak: () => {},
  onSortSelect: () => {},
  sortBy: 'DATE_CLIMBED',
};
