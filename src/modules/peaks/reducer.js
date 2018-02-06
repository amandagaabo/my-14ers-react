import {
  UPDATE_SORT,
  TOGGLE_INFO_WINDOW,
  CLOSE_INFO_WINDOW,
  GET_USER_PEAKS_REQUEST,
  GET_USER_PEAKS_SUCCESS,
  GET_USER_PEAKS_ERROR,
  ADD_PEAK_REQUEST,
  ADD_PEAK_SUCCESS,
  ADD_PEAK_ERROR,
  UPDATE_PEAK_REQUEST,
  UPDATE_PEAK_SUCCESS,
  UPDATE_PEAK_ERROR,
  REMOVE_PEAK_REQUEST,
  REMOVE_PEAK_SUCCESS,
  REMOVE_PEAK_ERROR,
} from './actions';
import peakData from './all-peak-data';

const allPeaks = [...peakData];

const initialState = {
  showInfoWindowID: null,
  allPeaks,
  mapCenter: { lat: 39.0051, lng: -105.5197 },
  loading: false,
  error: null,
  userPeaks: [],
  sortBy: 'DATE_CLIMBED',
};

export default function (state = initialState, action) {
  switch (action.type) {
  case UPDATE_SORT:
    return {
      ...state,
      sortBy: action.sortBy,
    };

  case TOGGLE_INFO_WINDOW:
    return {
      ...state,
      showInfoWindowID: action.peakID === state.showInfoWindowID ? null : action.peakId,
      mapCenter: { lat: action.lat, lng: action.lng },
    };

  case CLOSE_INFO_WINDOW:
    return {
      ...state,
      showInfoWindowID: null,
    };

  case GET_USER_PEAKS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_USER_PEAKS_SUCCESS:
    return {
      ...state,
      loading: false,
      userPeaks: action.userPeaks || [],
    };
  case GET_USER_PEAKS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };

  case ADD_PEAK_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case ADD_PEAK_SUCCESS:
    return {
      ...state,
      loading: false,
      userPeaks: [...state.userPeaks, action.peak],
    };
  case ADD_PEAK_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };

  case UPDATE_PEAK_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case UPDATE_PEAK_SUCCESS:
    return {
      ...state,
      loading: false,
      userPeaks: state.userPeaks.map(peak => peak.uuid === action.peak.uuid
        ? { ...peak, dateClimbed: action.peak.dateClimbed, notes: action.peak.notes }
        : peak
      )
    };
  case UPDATE_PEAK_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };

  case REMOVE_PEAK_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case REMOVE_PEAK_SUCCESS:
    return {
      ...state,
      loading: false,
      userPeaks: state.userPeaks.filter(peak => peak.uuid !== action.peakId),
    };
  case REMOVE_PEAK_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };

  default:
    return state;
  }
}
