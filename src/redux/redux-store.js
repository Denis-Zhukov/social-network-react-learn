import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {navbarReducer} from "./navbarReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navbar: navbarReducer
});

export const store = createStore(reducers);