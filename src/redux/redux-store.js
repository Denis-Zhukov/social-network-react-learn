import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersRudecer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navbar: navbarReducer,
    users: usersReducer
});

export const store = createStore(reducers);