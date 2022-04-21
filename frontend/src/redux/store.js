import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import gameReducer from "./games/gameReducer";
import characterReducer from "./games/characterReducer";
import { loadState, saveState } from "../localStorage";

const persistedState = loadState();

const rootReducer = combineReducers({ gameReducer, characterReducer });

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
