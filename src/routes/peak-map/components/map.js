import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './map-marker';

const MapComponent = withScriptjs(withGoogleMap((props) => {
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

  return (
    <GoogleMap
      defaultZoom={7}
      center={props.mapCenter}
      onClick={props.onCloseInfoWindow}
    >
      {markers}
    </GoogleMap>
  );
},
));


export default function Map(props) {
  return (
    <MapComponent
      {...props}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAiwermI7LxJMOueDDK_gkTQvT8W3Z_VXI"
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '600px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}

Map.propTypes = {
  userPeaks: PropTypes.array,
  mapCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  onCloseInfoWindow: PropTypes.func,
};

Map.defaultProps = {
  userPeaks: [],
  mapCenter: { lat: 39.0051, lng: -105.5197 },
  onCloseInfoWindow: () => {},
};
