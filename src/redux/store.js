import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

export default configureStore({
  reducer: {
    // below user is match userSlice js - useSlice inside of name:"user"
    user: useReducer,
  },
});
