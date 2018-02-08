import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Icon } from 'react-fa';
import './layout.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptionsId: null
    };
  }

  onSortChange(e) {
    const sortBy = e.target.value;
    this.props.onSortSelect(sortBy);
  }

  onMouseEnter(peakId) {
    this.setState({
      showOptionsId: peakId
    });
  }

  onMouseLeave() {
    this.setState({
      showOptionsId: null
    });
  }

  onEditClick(peakId, peakName, dateClimbed, notes) {
    const editPeak = {
      peakId,
      peakName,
      dateClimbed,
      notes
    };
    this.props.onSetEditPeak(editPeak);
  }

  onDeleteClick(peakId) {
    const token = this.props.authToken;
    const { uuid } = this.props.currentUser;
    this.props.onDeletePeak(token, uuid, peakId);
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <Redirect to="/login" />
      );
    }

    // setup photo list
    const { userPeaks } = this.props;
    let peakPhotoList;
    if (userPeaks.length === 0) {
      peakPhotoList = '';
    } else {
      // generage JSX for each row
      peakPhotoList = userPeaks.map((row) => {
        const peaks = row.peaks.map((peak) => {
          const visibility = peak.uuid === this.state.showOptionsId ? '' : 'hidden';
          return (
            <Col
              className="mountain-box"
              xs={12}
              md={4}
              key={peak.id}
              onMouseEnter={() => this.onMouseEnter(peak.uuid)}
              onMouseLeave={() => this.onMouseLeave(peak.uuid)}
            >
              <img src={peak.imgSrc} alt={peak.peakName} className="mountain-photo" />
              <div className="caption">
                <h2 className="caption-header">{peak.peakName} - {peak.elevation}</h2>
                <p className="caption-details">Rank: {peak.rank}</p>
                <p className="caption-details">Date climbed: {peak.date}</p>
                <br />
                <p className="caption-details">{peak.notes}</p>

                <div className="hover-options">
                  <Link
                    to="/edit"
                    className={`button edit-peak ${visibility}`}
                    onClick={() => this.onEditClick(peak.uuid, peak.peakName, peak.date, peak.notes)}
                  > <Icon name="pencil" />
                  </Link>
                  <button
                    className={`button remove-peak ${visibility}`}
                    onClick={() => this.onDeleteClick(peak.uuid)}
                  > x
                  </button>
                </div>
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
      <main role="main" className="peak-list-container">
        <div className="container">
          <h1 className="page-header">Peak List</h1>

          <div className="peak-list-container" >
            <div className="list-sort">
              <label htmlFor="sort-by">Sort by: </label>
              <select id="sort-by" onChange={e => this.onSortChange(e)} value={this.props.sortBy}>
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
}

Layout.propTypes = {
  userPeaks: PropTypes.array,
  authToken: PropTypes.string,
  loggedIn: PropTypes.bool,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    uuid: PropTypes.string
  }),
  sortBy: PropTypes.string,
  onSetEditPeak: PropTypes.func,
  onDeletePeak: PropTypes.func,
  onSortSelect: PropTypes.func
};

Layout.defaultProps = {
  userPeaks: [],
  authToken: null,
  loggedIn: false,
  currentUser: null,
  sortBy: 'DATE_CLIMBED'
};
