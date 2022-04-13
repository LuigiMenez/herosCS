import axios from "axios";

const initialState = {
  games: [],
};

// eslint-disable-next-line default-param-last
function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADGAMES": {
      return {
        ...state,
        games: action.payload,
      };
    }
    default:
      return state;
  }
}

export default gameReducer;

export const getGames = () => (dispatch) => {
  axios.get(`http://localhost:5050/jdr`).then(({ data }) => {
    dispatch({
      type: "LOADGAMES",
      payload: data,
    });
  });
};
