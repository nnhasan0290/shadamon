
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { defaultReducer } from "./reducers/defaultReducer";

const rootReducer = combineReducers({
  default: defaultReducer,
});

const middleware:any = [thunk];

const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
);
export default store;