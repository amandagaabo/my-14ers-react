import { getUserPeaksFromDB, updateUserPeaksInDB } from './api';

// GET USER PEAKS
export const GET_USER_PEAKS_REQUEST = 'GET_USER_PEAKS_REQUEST';
export const getUserPeaksRequest = () => ({
  type: GET_USER_PEAKS_REQUEST,
});

export const GET_USER_PEAKS_SUCCESS = 'GET_USER_PEAKS_SUCCESS';
export const getUserPeaksSuccess = peaks => ({
  type: GET_USER_PEAKS_SUCCESS,
  peaks,
});

export const GET_USER_PEAKS_ERROR = 'GET_USER_PEAKS_ERROR';
export const getUserPeaksError = error => ({
  type: GET_USER_PEAKS_ERROR,
  error,
});

export const getUserPeaks = (token, getPeaks = getUserPeaksFromDB) => (dispatch) => {
  // dispatch the request action to start the request
  dispatch(getUserPeaksRequest());
  // search for the users peaks in the database (AJAX)
  return getPeaks(token).then((peaks) => {
    // dispatch the success action and pass in the result from the db search on success
    dispatch(getUserPeaksSuccess(peaks));
  }).catch((err) => {
    // dispatch the error action if something goes wrong
    dispatch(getUserPeaksError(err));
  });
};

export const TOGGLE_INFO_WINDOW = 'TOGGLE_INFO_WINDOW';
export const toggleInfoWindow = peakID => ({
  type: TOGGLE_INFO_WINDOW,
  peakID,
});

export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';
export const closeInfoWindow = () => ({
  type: CLOSE_INFO_WINDOW,
});
