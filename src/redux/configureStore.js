import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import auth from "./features/auth";

export const store = createStore(
  combineReducers({
    auth,
  }),
  applyMiddleware(thunk)
);
