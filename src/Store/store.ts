import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducer from "../Reducers/reducer"
import request from "../Shared/request"

const dependency: ThunkDependency = {
    ...request,
}

const thunkMiddleware = thunk.withExtraArgument(dependency)
export default createStore<StoreState>(reducer, applyMiddleware(thunkMiddleware))
