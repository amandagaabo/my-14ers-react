// import actions

const initialState = {
  userPeaks: [],
  peakNames: [
    {name: 'Mt. Princeton', id: 1},
    {name: 'Mt. Yale', id: 2},
    {name: 'Mt. Massive', id: 3},
  ]
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
