import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from '../containers/map-marker';

export default function Map(props) {
  // get user peaks from props
  const { userPeaks } = props;

  // make new array of peak data for markers so there is only one marker per peak
  const peakMarkers = [];
  const peakNames = [];

  userPeaks.forEach((peak) => {
    const peakName = peak.peak_name;
    // if peak name is not in the list, add name to peakNames and all data to peakMarkers
    if (!peakNames.includes(peakName)) {
      peakNames.push(peakName);

      const peakDataToAdd = {
        peak_name: peak.peak_name,
        elevation: peak.elevation,
        rank: peak.rank,
        dateClimbed: [peak.dateClimbed],
        imgSrc: peak.imgSrc,
        latitude: peak.latitude,
        longitude: peak.longitude,
        id: peak.id,
      };

      peakMarkers.push(peakDataToAdd);
    } else {
      // if peak name is in the list, add date to existing peak
      const index = peakMarkers.findIndex(peak => peak.peak_name === peakName);
      peakMarkers[index].dateClimbed.push(peak.dateClimbed);
    }
  });

  // create marker for each peak in userPeaks
  const markers = peakMarkers.map((peak) => {
    if (peak) {
      return (
        <MapMarker key={peak.id} peak={peak} />
      );
    }
    return '';
  });

  // set map base to show all of colorado
  const colorado = { lat: 39.0051, lng: -105.5197 };

  const MapComponent = withScriptjs(withGoogleMap(() => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={colorado}
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
};

Map.defaultProps = {
  userPeaks: [],
};
