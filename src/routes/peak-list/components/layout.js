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
              <Col className="inner-box">
                <img src={peak.imgSrc} alt={peak.peakName} className="mountain-photo" />

                <Col xs={12} className="caption-header">
                  <h2>{peak.peakName}</h2>
                </Col>

                <Col xs={12} className="caption-details">
                  <Col xs={4} className="detail-box right-border">
                    <p className="caption-text">{peak.elevation}</p>
                    <p className="caption-description">feet</p>
                  </Col>

                  <Col xs={3} className="detail-box">
                    <p className="caption-text">{peak.rank}</p>
                    <p className="caption-description">rank</p>
                  </Col>

                  <Col xs={5} className="detail-box left-border">
                    <p className="caption-text">{peak.date}</p>
                    <p className="caption-description">date</p>
                  </Col>
                </Col>

                <Col xs={12} className="caption-notes">
                  <p>{peak.notes}</p>
                </Col>

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
                  > <Icon name="times" />
                  </button>
                </div>

              </Col>
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
