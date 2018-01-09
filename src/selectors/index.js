import { createSelector } from 'reselect';

const getUserPeaks = state => state.app.peaks.userPeaks;

export const getPeaksForMap = createSelector(
  [getUserPeaks],
  (userPeaks) => {
    // new array of peak marker data and peak names to track repeats
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
    return peakMarkers;
  },
);

export default getPeaksForMap;
