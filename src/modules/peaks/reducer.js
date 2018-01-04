// import actions
import peakData from './all-peak-data';

const allPeaks = [...peakData];

const initialState = {
  allPeaks,
  userPeaks: [
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516749/14ers/mt_elbert.jpg',
      peak_name: 'Mt. Elbert',
      range: 'Sawatch Range',
      rank: '1',
      elevation: '14433',
      towns: 'Leadville, Twin Lakes, Aspen',
      latitude: '39.117777777777775',
      longitude: '-106.44472222222223',
      dateClimbed: '12-12-2012',
      notes: 'it was fun',
      id: 1,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516746/14ers/blanca.jpg',
      peak_name: 'Blanca Peak',
      range: 'Sangre de Cristo',
      rank: '4',
      elevation: '14345',
      towns: 'Fort Garland, Blanca, Alamosa',
      latitude: '37.577222222222225',
      longitude: '-105.48527777777778',
      dateClimbed: '10-10-2010',
      notes: 'very cold',
      id: 2,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516749/14ers/mt_elbert.jpg',
      peak_name: 'Mt. Elbert2',
      range: 'Sawatch Range',
      rank: '2',
      elevation: '14433',
      towns: 'Leadville, Twin Lakes, Aspen',
      latitude: '39.117777777777775',
      longitude: '-106.44472222222223',
      dateClimbed: '07-07-2007',
      notes: 'yay hiking',
      id: 3,
    },
    {
      imgSrc: 'https://res.cloudinary.com/amhprojects/image/upload/v1514516749/14ers/mt_elbert.jpg',
      peak_name: 'Mt. Elbert3',
      range: 'Sawatch Range',
      rank: '3',
      elevation: '14433',
      towns: 'Leadville, Twin Lakes, Aspen',
      latitude: '39.117777777777775',
      longitude: '-106.44472222222223',
      dateClimbed: '11-11-2011',
      notes: 'almost didnt make it',
      id: 4,
    },
  ],
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
