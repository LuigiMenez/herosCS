/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prefer-object-spread */
import themes from "../../theme";
import * as Actions from "./themeActions";

const initialState = {
  theme: themes.hf,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: themes[action.payload] });
    default:
      return state;
  }
}

export default themeReducer;
