// import actions

const initialState = {
  authToken: 123, // authToken !== null does not mean it has been validated
  currentUser: 'amanda',
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
