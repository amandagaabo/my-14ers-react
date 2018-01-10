// import { API_BASE_URL } from '../../config';

export function getUserPeaksFromDB(token) {
  return Promise.resolve();
  // return fetch(`${API_BASE_URL}/peaks`, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  // }).then((res) => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   return res.json();
  // }).then((userPeaks) => {
  //   return userPeaks;
  // });
}

export function addPeakToDB(token, newPeak) {
  return Promise.resolve(newPeak);
  // return fetch(`${API_BASE_URL}/peaks/add`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     newPeak: `${newPeak}`,
  //   }),
  // }).then((res) => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   return res.json();
  // }).then((peak) => {
  //   return peak;
  // });
}

export function removePeakFromDB(token, peakID) {
  return Promise.resolve();
  // return fetch(`${API_BASE_URL}/groceries/delete/${peakID}`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: `Bearer ${token}`,
  //     'Content-Type': 'application/json',
  //   },
  // }).then((res) => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   return peakID;
  // });
}
