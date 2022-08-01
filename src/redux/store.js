import {configureStore} from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import formFocusReducer from "./formFocusSlice";


export default configureStore({
    reducer : {
        posts: postReducer,
        formFocus: formFocusReducer
    }
})