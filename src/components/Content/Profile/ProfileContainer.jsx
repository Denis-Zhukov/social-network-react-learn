import React from "react";
import StoreContext from "../../../StoreContext";
import {Profile} from "./Profile";

export const ProfileContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().profile;
                return <Profile {...props} headerImage={state.headerImage} avatar={state.avatar} info={state.info}/>
            }}
        </StoreContext.Consumer>
    )
}