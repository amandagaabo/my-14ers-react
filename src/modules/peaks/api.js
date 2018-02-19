import { API_BASE_URL } from '../../config';

export function getUserPeaksFromDB(token, userId) {
  return fetch(`${API_BASE_URL}/users/${userId}/peaks`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((userPeaks) => {
    // array of user peaks is returned
    return userPeaks;
  });
}

export function addPeakToDB(token, userId, newPeak) {
  return fetch(`${API_BASE_URL}/users/${userId}/peaks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      peakName: newPeak.peakName,
      dateClimbed: newPeak.dateClimbed,
      notes: newPeak.notes,
      imgSrc: newPeak.imgSrc,
      range: newPeak.range,
      rank: newPeak.rank,
      elevation: newPeak.elevation,
      latitude: newPeak.latitude,
      longitude: newPeak.longitude
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((peak) => {
    // new peak object is returned after successful add
    return peak;
  });
}

export function updatePeakInDB(token, userId, peakId, dateClimbed, notes) {
  return fetch(`${API_BASE_URL}/users/${userId}/${peakId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      dateClimbed,
      notes
    })
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then((peak) => {
    // updated peak is returned after successful update
    return peak;
  });
}

export function removePeakFromDB(token, userId, peakId) {
  return fetch(`${API_BASE_URL}/users/${userId}/${peakId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    // removed peak uuid is returned after successful delete
    return peakId;
  });
}
