import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authenticationReducer } from "../reducers/authenticationReducer";
import thunk from "redux-thunk";
import { uiReducer } from "../reducers/uiReducer";
const reducers = combineReducers({
  authentication: authenticationReducer,
  ui: uiReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
