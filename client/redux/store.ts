
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createCategoryReducer, createSubCatReducer, getAllCategoryReducer, getCatUnderParentReducer, getFeaturesReducer, getFeatureUnderSubReducer, getLocationReducer, GetParentCategoryReducer, getSubCatReducer } from "./reducers/admin/catReducer";
import { createLocationReducer } from "./reducers/admin/locationReducer";
import { createProductReducer, getAllProductReducer } from "./reducers/admin/productReducer";
import { defaultReducer } from "./reducers/defaultReducer";
import { loadReducer, loginReducer, signUpReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
  default: defaultReducer,
  signUp: signUpReducer,
  login: loginReducer,
  load: loadReducer,
  //admin
  adminCat: GetParentCategoryReducer,
  createCat: createCategoryReducer,
  allCat: getAllCategoryReducer,
  allFeatures: getFeaturesReducer,
  createSub: createSubCatReducer,
  locations: getLocationReducer,
  subCat: getSubCatReducer,
  catUnderParent: getCatUnderParentReducer,
  featureUnderSub: getFeatureUnderSubReducer,
  createPd: createProductReducer,
  allProduct: getAllProductReducer,
  createLocation: createLocationReducer,
});

const store = createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
);
export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch