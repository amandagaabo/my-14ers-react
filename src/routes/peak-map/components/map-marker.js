import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import dateFormat from 'dateformat';
import { Icon } from 'react-fa';
import { Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import './map-marker.css';

export default function MapMarker(props) {
  function onMarkerClick(peakID, lat, lng) {
    const adjustedLat = lat - 0.35;
    props.onToggleInfoWindow(peakID, adjustedLat, lng);
  }

  function onCloseClick() {
    props.onCloseInfoWindow();
  }

  const { peak } = props;
  const formatedElevation = numeral(peak.elevation).format('0,0');
  let dateContentString = '';
  const dateArray = peak.dateClimbed;
  dateArray.sort();

  // format the dates and push to new array
  const formatedDateArray = [];
  dateArray.forEach((date) => {
    const formatedDate = dateFormat(date, 'mmm d, yyyy');
    formatedDateArray.push(formatedDate);
  });

  if (formatedDateArray.length === 1) {
    const date = formatedDateArray[0];
    dateContentString = (
      <p className="info-window-text">
        <span className="info-window-key">Date climbed:</span> {date}
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
      <button className="close-x" onClick={onCloseClick}>
        <Icon name="times" />
      </button>
      <h1 className="info-window-header">{peak.peakName}</h1>
      <p className="info-window-text">
        <span className="info-window-key">Elevation:</span> {formatedElevation} ft
      </p>
      <p className="info-window-text">
        <span className="info-window-key">Rank:</span> {peak.rank}
      </p>
      {dateContentString}
      <img className="info-window-image" src={peak.imgSrc} alt={peak.peakName} />
    </div>
  );

  return (
    <Marker
      position={{
        lat: parseFloat(props.peak.latitude),
        lng: parseFloat(props.peak.longitude),
      }}
      onClick={() => onMarkerClick(props.peak.id, props.peak.latitude, props.peak.longitude)}
      icon="https://res.cloudinary.com/amhprojects/image/upload/c_scale,w_35/v1518816595/14ers/map-marker.png"
    >
      {props.peak.id === props.showInfoWindowID &&
      <InfoBox
        options={{ closeBoxURL: '', enableEventPropagation: true }}
      >
        {infoBoxContent}
      </InfoBox>}
    </Marker>
  );
}

MapMarker.propTypes = {
  peak: PropTypes.shape({
    id: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    imgSrc: PropTypes.string,
    peakName: PropTypes.string,
  }),
  showInfoWindowID: PropTypes.number,
  onToggleInfoWindow: PropTypes.func,
  onCloseInfoWindow: PropTypes.func,
};

MapMarker.defaultProps = {
  peak: {},
  showInfoWindowID: null,
  onToggleInfoWindow: 'not connected',
  onCloseInfoWindow: 'not connected',
};
