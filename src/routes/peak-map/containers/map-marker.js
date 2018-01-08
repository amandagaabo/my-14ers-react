import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';
import { Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import './map-marker.css';

export default class MapMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { peak } = this.props;
    const formatedElevation = numeral(peak.elevation).format('0,0');
    let dateContentString = '';
    const dateArray = peak.dateClimbed;
    dateArray.sort();

    // format the dates and push to new array
    const formatedDateArray = [];
    dateArray.forEach((date) => {
      const formatedDate = moment(date).format('MMM D, YYYY');
      formatedDateArray.push(formatedDate);
    });

    if (formatedDateArray.length === 1) {
      const date = formatedDateArray[0];
      dateContentString = (
        <p className="info-window-text">
          <span className="info-window-key">Date climbed:</span>
          {date}
        </p>
      );
    } else {
      const dates = formatedDateArray.join(', ');
      dateContentString = (
        <p className="info-window-text">
          <span className="info-window-key">Dates climbed:</span> {dates}
        </p>
      );
    }

    // define conntent for info windows
    const infoBoxContent = (
      <div className="info-window-container">
        <h1 className="info-window-header">{peak.peak_name}</h1>
        <p className="info-window-text">
          <span className="info-window-key">Elevation:</span> {formatedElevation}
        </p>
        <p className="info-window-text">
          <span className="info-window-key">Rank:</span> {peak.rank}
        </p>
        {dateContentString}
        <img className="info-window-image" src={peak.imgSrc} alt={peak.peak_name} />
      </div>
    );

    return (
      <Marker
        position={{
          lat: parseFloat(this.props.peak.latitude),
          lng: parseFloat(this.props.peak.longitude),
        }}
        onClick={() => this.onToggleOpen()}
      >
        {this.state.isOpen &&
        <InfoBox
          onCloseClick={() => this.onToggleOpen()}
          options={{ closeBoxURL: '', enableEventPropagation: true }}
        >
          {infoBoxContent}
        </InfoBox>}
      </Marker>
    );
  }
}

MapMarker.propTypes = {
  peak: PropTypes.shape({
    id: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    imgSrc: PropTypes.string,
    peakName: PropTypes.string,
  }),
};

MapMarker.defaultProps = {
  peak: {},
};
