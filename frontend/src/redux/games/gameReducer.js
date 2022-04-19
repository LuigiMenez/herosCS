import axios from "axios";

const initialState = {
  games: [],
  currentGame: {},
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
    case "FOCUSGAME": {
      return {
        ...state,
        currentGame:
          state.games.find((game) => game.id === action.payload) || {},
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

export const gameDetails = (id) => (dispatch) => {
  dispatch({
    type: "FOCUSGAME",
    payload: Number(id),
  });
};
