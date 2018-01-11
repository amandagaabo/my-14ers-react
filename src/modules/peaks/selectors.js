import { createSelector } from 'reselect';
import moment from 'moment';

// define constants from state
const getUserPeaks = state => state.app.peaks.userPeaks;
const getPeakSort = state => state.app.peaks.sort;

// get peaks with sort
export const getSortedPeaks = createSelector(
  [getUserPeaks, getPeakSort],
  (userPeaks, peakSort) => {
    switch (peakSort) {
    case 'PEAK_NAME':
      return userPeaks.sort((a, b) => {
        if (a.peakName < b.peakName) {
          return -1;
        } if (b.peakName < a.peakName) {
          return 1;
        }
        return 0;
      });

    case 'DATE_CLIMBED':
      return userPeaks.sort((a, b) => {
        const dateA = moment(a.dateClimbed).unix();
        const dateB = moment(b.dateClimbed).unix();
        return dateB - dateA;
      });

    case 'RANK':
      // elevation is used because a few peaks have rank N/A but have elevation
      return userPeaks.sort((a, b) => a.elebation - b.elevation);

    default:
      return userPeaks;
    }
  },
);

// get peaks for map markers
export const getPeaksForMap = createSelector(
  [getUserPeaks],
  (userPeaks) => {
    // new array of peak marker data and peak names to track repeats
    const peakMarkers = [];
    const peakNames = [];

    userPeaks.forEach((peak) => {
      const { peakName } = peak;
      // if peak name is not in the list, add name to peakNames and all data to peakMarkers
      if (!peakNames.includes(peakName)) {
        peakNames.push(peakName);

        const peakDataToAdd = {
          peakName: peak.peakName,
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
        const index = peakMarkers.findIndex(peak => peak.peakName === peakName);
        peakMarkers[index].dateClimbed.push(peak.dateClimbed);
      }
    });
    return peakMarkers;
  },
);
