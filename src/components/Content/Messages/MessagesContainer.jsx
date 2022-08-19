import React from "react";
import StoreContext from "../../../StoreContext";
import {Messages} from "./Messages";

export const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().messages;
                    return <Messages {...props} dialogs={state.dialogs}/>
                }
            }
        </StoreContext.Consumer>
    )
}