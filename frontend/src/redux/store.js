import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import gameReducer from "./games/gameReducer";

const rootReducer = combineReducers({ gameReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))

  // /* eslint-disable no-underscore-dangle */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // /* eslint-disable no-underscore-dangle */
);

export default store;
