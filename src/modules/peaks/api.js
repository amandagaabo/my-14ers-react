import { API_BASE_URL } from '../../config';

export function getUserPeaksFromDB(token) {
  const userPeaks = [
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516749/14ers/mt_elbert.jpg',
      peakName: 'Mt. Elbert',
      range: 'Sawatch Range',
      rank: 1,
      elevation: 14433,
      towns: 'Leadville, Twin Lakes, Aspen',
      latitude: 39.117777777777775,
      longitude: -106.44472222222223,
      dateClimbed: '07-07-2017',
      notes: 'it was fun',
      id: 1,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516746/14ers/blanca.jpg',
      peakName: 'Blanca Peak',
      range: 'Sangre de Cristo',
      rank: 4,
      elevation: 14345,
      towns: 'Fort Garland, Blanca, Alamosa',
      latitude: 37.577222222222225,
      longitude: -105.48527777777778,
      dateClimbed: '10-15-2016',
      notes: 'very cold',
      id: 2,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516757/14ers/torreys.jpg',
      peakName: 'Torreys Peak',
      range: 'Front Range',
      rank: 11,
      elevation: 14267,
      towns: 'Bakerville, Montezuma, Keystone',
      latitude: 39.64277777777778,
      longitude: -105.82083333333333,
      dateClimbed: '09-20-2016',
      notes: 'yay hiking',
      id: 3,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516747/14ers/castle.jpg',
      peakName: 'Castle Peak',
      range: 'Elk Mountains',
      rank: 12,
      elevation: 14265,
      towns: 'Ashcroft, Crested Butte, Aspen',
      latitude: 39.00972222222222,
      longitude: -106.86138888888888,
      dateClimbed: '08-20-2016',
      notes: 'first attempt',
      id: 4,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516747/14ers/castle.jpg',
      peakName: 'Castle Peak',
      range: 'Elk Mountains',
      rank: 12,
      elevation: 14265,
      towns: 'Ashcroft, Crested Butte, Aspen',
      latitude: 39.00972222222222,
      longitude: -106.86138888888888,
      dateClimbed: '08-20-2017',
      notes: 'fun hike, made it this time',
      id: 5,
    },
  ];

  return Promise.resolve(userPeaks);
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

export function addPeakToDB(token, uuid, newPeak) {
  console.log('uuid and newPeak to add to db', uuid, newPeak);

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
    console.log('returned peak from api request', peak);
    return peak;
  });
}

export function removePeakFromDB(token, peakID) {
  return Promise.resolve(peakID);
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
