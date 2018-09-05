import { combineReducers } from "redux"
import home from "../Home/home.reducers"

export default combineReducers<StoreState>({
    home,
})
