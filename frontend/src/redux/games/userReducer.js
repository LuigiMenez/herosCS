const initialState = {
  token: "",
  user: {
    id: "",
    mail: "",
    password: "",
    login: "",
    firstname: "",
    lastname: "",
    avatar: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: { ...action.payload } };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
