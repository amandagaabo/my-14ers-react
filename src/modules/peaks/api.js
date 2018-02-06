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
    return userPeaks;
  });
}

export function addPeakToDB(token, uuid, newPeak) {
  return fetch(`${API_BASE_URL}/users/${uuid}/peaks`, {
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
    return peak;
  });
}

export function updatePeakInDB(token, uuid, peakId, dateClimbed, notes) {
  return fetch(`${API_BASE_URL}/users/${uuid}/${peakId}`, {
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
    return peak;
  });
}

export function removePeakFromDB(token, uuid, peakId) {
  return fetch(`${API_BASE_URL}/users/${uuid}/${peakId}`, {
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
    return peakId;
  });
}
