import { combineReducers } from "redux";
import blogReducer from "./blogs/reducer/reducer"

const rootReducer = combineReducers({
    blogs: blogReducer,
})

export default rootReducer;