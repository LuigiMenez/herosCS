const initialState = {
  token: "",
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
    case "LOGIN":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
