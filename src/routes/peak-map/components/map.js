import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './map-marker';

export default function Map(props) {
  console.log('map props', props);
  // create marker for each peak in userPeaks
  const markers = props.userPeaks.map((peak) => {
    if (peak) {
      return (
        <MapMarker
          key={peak.id}
          peak={peak}
          {...props}
        />
      );
    }
    // if no peaks return null
    return null;
  });

  // set map base to show all of colorado
  const colorado = { lat: 39.0051, lng: -105.5197 };

  const MapComponent = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={colorado}
      onClick={props.onCloseInfoWindow}
    >
      {markers}
    </GoogleMap>
  ),
  ));

  return (
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAiwermI7LxJMOueDDK_gkTQvT8W3Z_VXI"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '600px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}

Map.propTypes = {
  userPeaks: PropTypes.array,
  onCloseInfoWindow: PropTypes.func,
};

Map.defaultProps = {
  userPeaks: [],
  onCloseInfoWindow: () => {},
};
