import {combineReducers} from "redux"
import { userReducer } from "./user/UserReducer"

export const rootReducer = combineReducers({
    user: userReducer
})