import axios from "axios";

const initialState = {
  characters: [],
};

// eslint-disable-next-line default-param-last
function characterReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADCHARACTER": {
      return {
        ...state,
        characters: action.payload,
      };
    }
    default:
      return state;
  }
}

export default characterReducer;

export const getCharacter = (id) => (dispatch) => {
  axios.get(`http://localhost:5050/Characters/${id}`).then(({ data }) => {
    dispatch({
      type: "LOADCHARACTER",
      payload: data,
    });
  });
};
