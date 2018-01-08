import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggleOpen() {
    console.log('onToggleOpen called')
    this.setState( {
      isOpen: !this.state.isOpen
    })
  }

  render() {
    // get user peaks from props
    const { userPeaks } = this.props;

    // set map base to show all of colorado
    const colorado = { lat: 39.0051, lng: -105.5197 };

    // create marker for each peak in userPeaks
    const markers = userPeaks.map((peak) => {
      if (peak) {
        return (
          <Marker
            key={peak.id}
            position={{ lat: peak.latitude, lng: peak.longitude }}
            onClick={() => this.onToggleOpen()}
          >
            {this.state.isOpen && <InfoBox
              onCloseClick={() => this.onToggleOpen()}
              options={{ closeBoxURL: '', enableEventPropagation: true }}
            >
              <div style={{ backgroundColor: 'white', padding: '12px' }}>
                <div style={{ fontSize: '16px', fontColor: 'black' }}>
                  Testing
                </div>
              </div>
            </InfoBox>}
          </Marker>
        );
      }
        return '';
    });

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
}

Map.propTypes = {
  userPeaks: PropTypes.array,
};

Map.defaultProps = {
  userPeaks: [],
};

/*
  // define infowindow with max size
  const infowindow = new google.maps.InfoWindow({
    maxWidth: 250,
  });

  // make new array of peak data for markers so there is only one marker per peak
  let peakMarkers = []
  let peakNames = []

  userPeakLog.forEach(peak => {
    let peakName = peak.peak_name

    if (!peakNames.includes(peakName)) {
      peakNames.push(peakName)

      let peakDataToAdd = {
        peak_name: peak.peak_name,
        elevation: peak.elevation,
        rank: peak.rank,
        dateClimbed: [peak.dateClimbed],
        imgSrc: peak.imgSrc,
        latitude: peak.latitude,
        longitude: peak.longitude
      }

      peakMarkers.push(peakDataToAdd)
    } else {
      let index = peakMarkers.findIndex(peak => peak.peak_name === peakName)
      peakMarkers[index].dateClimbed.push(peak.dateClimbed)
    }
  })

  // add marker for each peak in the peak maker array
  peakMarkers.forEach(peak => {
    let location = {lat: parseFloat(peak.latitude), lng: parseFloat(peak.longitude)}

    let marker = new google.maps.Marker({
      position: location,
      map: map,
      title: `${peak.peak_name}`
    })

    let formatedElevation = numeral(peak.elevation).format('0,0')
    let dateContentString = ''
    let dateArray = peak.dateClimbed
    dateArray.sort()

    // format the dates and push to new array
    let formatedDateArray = []
    dateArray.forEach(date => {
      let formatedDate = moment(date).format('MMM D, YYYY')
      formatedDateArray.push(formatedDate)
    })

    if (formatedDateArray.length === 1) {
      let date = formatedDateArray[0]
      dateContentString = `<p class="info-window-text"><span class="info-window-key">Date climbed:</span> ${date}</p>`
    } else {
      let dates = formatedDateArray.join(', ')
      dateContentString = `<p class="info-window-text"><span class="info-window-key">Dates climbed:</span> ${dates}</p>`
    }

    // define conntent string for info windows
    let contentString = `
      <div>
        <h1 class="info-window-header">${peak.peak_name}</h1>
        <p class="info-window-text"><span class="info-window-key">Elevation:</span> ${formatedElevation}</p>
        <p class="info-window-text"><span class="info-window-key">Rank:</span> ${peak.rank}</p>
        ${dateContentString}
        <img class="info-window-image" src="${peak.imgSrc}" alt="${peak.peak_name} photo">
      </div>`

    // when marker is clicked, set content and open infowindow
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(contentString)
      infowindow.open(map, marker)
    })

    // when map is clicked, close open info window
    google.maps.event.addListener(map, 'click', function () {
      infowindow.close()
    })
  })
*/
