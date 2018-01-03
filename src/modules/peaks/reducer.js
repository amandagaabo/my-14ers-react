// import actions
import peakData from './all-peak-data';

const peakNames = peakData.map((peak) => {
  const peakObj = {};
  peakObj.peakName = peak.attributes.peak_name;
  peakObj.peakId = peak.id;
  return peakObj;
});

function sortPeakNames() {
  peakNames.sort((a, b) => {
    const nameA = a.peakName;
    const nameB = b.peakName;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}
sortPeakNames();

const initialState = {
  userPeaks: [],
  peakNames,
};

export default function (state = initialState, action) {
  // switch (action.type) {
  //   case SET_AUTH_TOKEN:
  //     return {
  //       ...state,
  //       authToken: action.authToken
  //     };
  //
  //   case SET_CURRENT_USER:
  //     return {
  //       ...state,
  //       currentUser: action.currentUser
  //     };
  //
  //   default:
  //     return state;
  // }

  return state;
}
