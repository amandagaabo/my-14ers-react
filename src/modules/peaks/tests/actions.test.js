import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  UPDATE_SORT,
  updateSort,
  TOGGLE_INFO_WINDOW,
  toggleInfoWindow,
  CLOSE_INFO_WINDOW,
  closeInfoWindow,
  GET_USER_PEAKS_REQUEST,
  getUserPeaksRequest,
  GET_USER_PEAKS_SUCCESS,
  getUserPeaksSuccess,
  GET_USER_PEAKS_ERROR,
  getUserPeaksError,
  getUserPeaks,
  ADD_PEAK_REQUEST,
  addPeakRequest,
  ADD_PEAK_SUCCESS,
  addPeakSuccess,
  ADD_PEAK_ERROR,
  addPeakError,
  addPeak,
  UPDATE_PEAK_REQUEST,
  updatePeakRequest,
  UPDATE_PEAK_SUCCESS,
  updatePeakSuccess,
  UPDATE_PEAK_ERROR,
  updatePeakError,
  updatePeak,
  REMOVE_PEAK_REQUEST,
  removePeakRequest,
  REMOVE_PEAK_SUCCESS,
  removePeakSuccess,
  REMOVE_PEAK_ERROR,
  removePeakError,
  removePeak
} from './../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action', () => {
  describe('updateSort', () => {
    it('should return the action and sortBy', () => {
      const sortBy = 'RANK';
      const action = updateSort(sortBy);
      expect(action.type).to.equal(UPDATE_SORT);
      expect(action.sortBy).to.equal(sortBy);
    });
  });

  describe('toggleInfoWindow', () => {
    it('should return the action, peakId, lat and lng', () => {
      const peakId = 123;
      const lat = 35.0000;
      const lng = -120.0000;
      const action = toggleInfoWindow(peakId, lat, lng);
      expect(action.type).to.equal(TOGGLE_INFO_WINDOW);
      expect(action.peakId).to.equal(peakId);
      expect(action.lat).to.equal(lat);
      expect(action.lng).to.equal(lng);
    });
  });

  describe('closeInfoWindow', () => {
    it('should return the action', () => {
      const action = closeInfoWindow();
      expect(action.type).to.equal(CLOSE_INFO_WINDOW);
    });
  });

  describe('getUserPeaksRequest', () => {
    it('should return the action', () => {
      const action = getUserPeaksRequest();
      expect(action.type).to.equal(GET_USER_PEAKS_REQUEST);
    });
  });

  describe('getUserPeaksSuccess', () => {
    it('should return the action and peaks', () => {
      const userPeaks = [{ uuid: 1, peakName: 'name' }];
      const action = getUserPeaksSuccess(userPeaks);
      expect(action.type).to.equal(GET_USER_PEAKS_SUCCESS);
      expect(action.userPeaks).to.equal(userPeaks);
    });
  });

  describe('getUserPeaksError', () => {
    it('should return the action and error message', () => {
      const error = { message: 'error!' };
      const action = getUserPeaksError(error);
      expect(action.type).to.equal(GET_USER_PEAKS_ERROR);
      expect(action.error).to.equal(error);
    });
  });

  describe('getUserPeaks', () => {
    it('Should dispatch getUserPeaksRequest and getUserPeaksSuccess', () => {
      const store = mockStore({});
      const userId = 123;
      const token = '';
      const fetchPeaksMock = [
        { userId: 123, uuid: 123, peakName: 'bleford' },
        { userId: 123, uuid: 456, peakName: 'yale' },
        { userId: 123, uuid: 789, peakName: 'princeton' }
      ];

      const mockGetPeaksFromDB =
        jest.fn().mockImplementation(() => Promise.resolve(fetchPeaksMock));

      const expectedActions = [
        { type: GET_USER_PEAKS_REQUEST },
        { type: GET_USER_PEAKS_SUCCESS, userPeaks: fetchPeaksMock },
      ];

      return store.dispatch(
        getUserPeaks(token, userId, mockGetPeaksFromDB))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });

  describe('addPeakRequest', () => {
    it('should return the action', () => {
      const action = addPeakRequest();
      expect(action.type).to.equal(ADD_PEAK_REQUEST);
    });
  });

  describe('addPeakSuccess', () => {
    it('should return the action and new peak', () => {
      const newPeak = { uuid: 1, peakName: 'name' };
      const action = addPeakSuccess(newPeak);
      expect(action.type).to.equal(ADD_PEAK_SUCCESS);
      expect(action.peak).to.equal(newPeak);
    });
  });

  describe('addPeakError', () => {
    it('should return the action and error message', () => {
      const error = { message: 'error!' };
      const action = addPeakError(error);
      expect(action.type).to.equal(ADD_PEAK_ERROR);
      expect(action.error).to.equal(error);
    });
  });

  describe('addPeak', () => {
    it('Should dispatch addPeakRequest and addPeakSuccess', () => {
      const store = mockStore({});
      const token = '';
      const userId = 123;
      const peakName = 'Mt. Yale';
      const dateClimbed = '2017-07-07';
      const notes = 'fun hike';
      const addPeakMock = { userId: 123, uuid: 456, peakName: 'Mt. Yale' };

      const mockAddPeakToDB =
        jest.fn().mockImplementation(() => Promise.resolve(addPeakMock));

      const expectedActions = [
        { type: ADD_PEAK_REQUEST },
        { type: ADD_PEAK_SUCCESS, peak: addPeakMock },
      ];

      return store.dispatch(
        addPeak(token, userId, peakName, dateClimbed, notes, mockAddPeakToDB))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });

  describe('updatePeakRequest', () => {
    it('should return the action', () => {
      const action = updatePeakRequest();
      expect(action.type).to.equal(UPDATE_PEAK_REQUEST);
    });
  });

  describe('updatePeakSuccess', () => {
    it('should return the action and updated peak', () => {
      const peak = { uuid: 1, peakName: 'name' };
      const action = updatePeakSuccess(peak);
      expect(action.type).to.equal(UPDATE_PEAK_SUCCESS);
      expect(action.peak).to.equal(peak);
    });
  });

  describe('updatePeakError', () => {
    it('should return the action and error message', () => {
      const error = { message: 'error!' };
      const action = updatePeakError(error);
      expect(action.type).to.equal(UPDATE_PEAK_ERROR);
      expect(action.error).to.equal(error);
    });
  });

  describe('updatePeak', () => {
    it('Should dispatch updatePeakRequest and updatePeakSuccess', () => {
      const store = mockStore({});
      const token = '';
      const userId = 123;
      const peakId = 456;
      const dateClimbed = '2017-07-07';
      const notes = 'fun hike';
      const updatePeakMock = {
        userId: 123, uuid: 456, peakName: 'Mt. Yale', dateClimbed: '2017-07-07', notes: 'fun hike'
      };

      const mockUpdatePeakInDB =
        jest.fn().mockImplementation(() => Promise.resolve(updatePeakMock));

      const expectedActions = [
        { type: UPDATE_PEAK_REQUEST },
        { type: UPDATE_PEAK_SUCCESS, peak: updatePeakMock },
      ];

      return store.dispatch(
        updatePeak(token, userId, peakId, dateClimbed, notes, mockUpdatePeakInDB))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });

  describe('removePeakRequest', () => {
    it('should return the action', () => {
      const action = removePeakRequest();
      expect(action.type).to.equal(REMOVE_PEAK_REQUEST);
    });
  });

  describe('removePeakSuccess', () => {
    it('should return the action and removed peak id', () => {
      const peakId = 123;
      const action = removePeakSuccess(peakId);
      expect(action.type).to.equal(REMOVE_PEAK_SUCCESS);
      expect(action.peakId).to.equal(peakId);
    });
  });

  describe('removePeakError', () => {
    it('should return the action and error message', () => {
      const error = { message: 'error!' };
      const action = removePeakError(error);
      expect(action.type).to.equal(REMOVE_PEAK_ERROR);
      expect(action.error).to.equal(error);
    });
  });

  describe('removePeak', () => {
    it('Should dispatch removePeakRequest and removePeakSuccess', () => {
      const store = mockStore({});
      const token = '';
      const userId = 123;
      const peakId = 456;
      const removePeakMock = 456;

      const mockRemovePeakFromDB =
        jest.fn().mockImplementation(() => Promise.resolve(removePeakMock));

      const expectedActions = [
        { type: REMOVE_PEAK_REQUEST },
        { type: REMOVE_PEAK_SUCCESS, peakId: removePeakMock },
      ];

      return store.dispatch(
        removePeak(token, userId, peakId, mockRemovePeakFromDB))
        .then(() => {
          expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });
  });
});
