import { expect } from 'chai';
import reducer from './../reducer';
import {
  updateSort,
  setEditPeak,
  toggleInfoWindow,
  closeInfoWindow,
  getUserPeaksRequest,
  getUserPeaksSuccess,
  getUserPeaksError,
  addPeakRequest,
  addPeakSuccess,
  addPeakError,
  updatePeakRequest,
  updatePeakSuccess,
  updatePeakError,
  removePeakRequest,
  removePeakSuccess,
  removePeakError
} from './../actions';
import peakData from './../all-peak-data';

const allPeaks = [...peakData];

// initial state
const initialState = {
  showInfoWindowID: null,
  allPeaks,
  mapCenter: { lat: 39.0051, lng: -105.5197 },
  loading: false,
  error: null,
  userPeaks: [],
  sortBy: 'DATE_CLIMBED',
  editPeak: null
};

describe('Peak reducer', () => {
  it('should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).to.deep.equal(initialState);
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).to.deep.equal(currentState);
  });

  describe('updateSort', () => {
    it('should update sort in state', () => {
      const sortBy = 'RANK';
      const state = reducer(initialState, updateSort(sortBy));
      expect(state.sortBy).to.equal(sortBy);
    });
  });

  describe('setEditPeak', () => {
    it('should update edit peak in state', () => {
      const editPeak = {
        peakName: '',
        dateClimbed: '',
        notes: ''
      };
      const state = reducer(initialState, setEditPeak(editPeak));
      expect(state.editPeak).to.equal(editPeak);
    });
  });

  describe('toggleInfoWindow', () => {
    it('should update showInfoWindowID and mapCenter in state', () => {
      const peakId = '123';
      const lat = 38.0000;
      const lng = -100.0000;
      const state = reducer(initialState, toggleInfoWindow(peakId, lat, lng));
      expect(state.showInfoWindowID).to.equal(peakId);
      expect(state.mapCenter.lat).to.equal(lat);
      expect(state.mapCenter.lng).to.equal(lng);
    });
  });

  describe('closeInfoWindow', () => {
    it('should set showInfoWindowID to null in state', () => {
      // set initial state to have an id then check that it is null after action
      const startState = {
        ...initialState,
        showInfoWindowID: '123'
      };

      const state = reducer(startState, closeInfoWindow());
      expect(state.showInfoWindowID).to.equal(null);
    });
  });

  describe('get user peaks', () => {
    it('should set loading to true on getUserPeaksRequest', () => {
      const state = reducer(initialState, getUserPeaksRequest());
      expect(state.loading).to.equal(true);
    });

    it('should set userPeaks and set loading to false on getUserPeaksSuccess', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const userPeaks = [
        {
          peakName: '',
          dateClmbed: '',
          notes: ''
        }
      ];
      const state = reducer(startState, getUserPeaksSuccess(userPeaks));
      expect(state.userPeaks).to.equal(userPeaks);
      expect(state.loading).to.equal(false);
    });

    it('should set error to message and loading to false on getUserPeaksError', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const error = 'bad things happened';
      const state = reducer(startState, getUserPeaksError(error));
      expect(state.error).to.equal(error);
      expect(state.loading).to.equal(false);
    });
  });

  describe('add peak', () => {
    it('should set loading to true on addPeakRequest', () => {
      const state = reducer(initialState, addPeakRequest());
      expect(state.loading).to.equal(true);
    });

    it('should add peak to userPeaks and set loading to false on addPeakSuccess', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const newPeak = {
        uuid: 123,
        peakName: '',
        dateClmbed: '',
        notes: ''
      };
      const state = reducer(startState, addPeakSuccess(newPeak));
      expect(state.userPeaks.find(peak => peak.uuid === newPeak.uuid)).to.deep.equal(newPeak);
      expect(state.loading).to.equal(false);
    });

    it('should set error to message and loading to false on addPeakError', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const error = 'bad things happened';
      const state = reducer(startState, addPeakError(error));
      expect(state.error).to.equal(error);
      expect(state.loading).to.equal(false);
    });
  });

  describe('update peak', () => {
    it('should set loading to true on updatePeakRequest', () => {
      const state = reducer(initialState, updatePeakRequest());
      expect(state.loading).to.equal(true);
    });

    it('should update userPeaks and set loading to false on updatePeakSuccess', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        userPeaks: [{
          uuid: 123,
          dateClimbed: 'date',
          notes: 'notes'
        }],
        loading: true
      };
      const updatePeak = {
        uuid: 123,
        dateClimbed: 'new date',
        notes: 'new notes'
      };
      const state = reducer(startState, updatePeakSuccess(updatePeak));
      expect(state.userPeaks.find(peak => peak.uuid === updatePeak.uuid)).to.deep.equal(updatePeak);
      expect(state.loading).to.equal(false);
    });

    it('should set error to message and loading to false on updatePeakError', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const error = 'bad things happened';
      const state = reducer(startState, updatePeakError(error));
      expect(state.error).to.equal(error);
      expect(state.loading).to.equal(false);
    });
  });

  describe('remove peak', () => {
    it('should set loading to true on removePeakRequest', () => {
      const state = reducer(initialState, removePeakRequest());
      expect(state.loading).to.equal(true);
    });

    it('should remove peak from userPeaks and set loading to false on removePeakSuccess', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        userPeaks: [{
          uuid: 123,
          dateClimbed: 'date',
          notes: 'notes'
        }],
        loading: true
      };
      const removePeakId = 123;
      const state = reducer(startState, removePeakSuccess(removePeakId));
      expect(state.userPeaks.find(peak => peak.uuid === removePeakId.uuid)).to.equal(undefined);
      expect(state.loading).to.equal(false);
    });

    it('should set error to message and loading to false on removePeakError', () => {
      // set initial state loading to true to check that it is updated with the action
      const startState = {
        ...initialState,
        loading: true
      };
      const error = 'bad things happened';
      const state = reducer(startState, removePeakError(error));
      expect(state.error).to.equal(error);
      expect(state.loading).to.equal(false);
    });
  });
});
