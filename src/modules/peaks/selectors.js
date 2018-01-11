import { createSelector } from 'reselect';
import dateFormat from 'dateformat';
import numeral from 'numeral';

// define constants from state
const getUserPeaks = state => state.app.peaks.userPeaks;
const getPeakSort = state => state.app.peaks.sortBy;

// get peaks with sort
export const getSortedPeaksForList = createSelector(
  [getUserPeaks, getPeakSort],
  (userPeaks, peakSort) => {
    // sort peaks by sortBy
    switch (peakSort) {
    case 'PEAK_NAME':
      userPeaks.sort((a, b) => {
        if (a.peakName < b.peakName) {
          return -1;
        } if (b.peakName < a.peakName) {
          return 1;
        }
        return 0;
      });
      break;

    case 'DATE_CLIMBED':
      userPeaks.sort((a, b) => {
        const dateA = new Date(a.dateClimbed);
        const dateB = new Date(b.dateClimbed);
        return dateB - dateA;
      });
      break;

    case 'RANK':
      // elevation is used because a few peaks have rank N/A but have elevation
      userPeaks.sort((a, b) => b.elevation - a.elevation);
      break;

    default:
      // do nothing
    }

    // start new list of peaks that are saved by row number
    const peaksForList = [];

    // calculate number of rows needed for n peaks/row
    const numberOfPeaks = userPeaks.length;
    const n = 3;
    const rowsNeeded = Math.ceil(numberOfPeaks / n);

    // add rows and peak placeholders to dataForList
    for (let i = 1; i <= rowsNeeded; i += 1) {
      peaksForList.push({ row: i, peaks: [] });
    }

    // add peak data to peaks in dataForList
    let temparray;
    for (let i = 0; i < userPeaks.length; i += n) {
      temparray = userPeaks.slice(i, i + n);

      temparray.forEach((peak) => {
        const formatedDate = dateFormat(peak.dateClimbed, 'mmm d, yyyy');
        const formattedElevation = numeral(peak.elevation).format('0,0');
        const rowNum = Math.ceil((i + 1) / n);
        const index = peaksForList.findIndex(i => i.row === rowNum);

        peaksForList[index].peaks.push({
          peakName: peak.peakName,
          rank: peak.rank,
          imgSrc: peak.imgSrc,
          notes: peak.notes,
          id: peak.id,
          date: formatedDate,
          elevation: formattedElevation,
        });
      });
    }
    return peaksForList;
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
