
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { defaultReducer } from "./reducers/defaultReducer";
import { loginReducer, signUpReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  default: defaultReducer,
  signUp: signUpReducer,
  login: loginReducer,
});

const middleware:any = [thunk];

const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch