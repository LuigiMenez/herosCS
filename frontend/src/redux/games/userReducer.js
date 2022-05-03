const initialState = {
  token: null,
  user: {
    id: null,
    mail: null,
    password: null,
    login: null,
    firstname: null,
    lastname: null,
    avatar: null,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return initialState;
    case "LOGIN":
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
};

export default userReducer;
