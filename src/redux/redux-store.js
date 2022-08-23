import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersRudecer";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navbar: navbarReducer,
    users: usersReducer,
    auth: authReducer
});

export const store = createStore(reducers);