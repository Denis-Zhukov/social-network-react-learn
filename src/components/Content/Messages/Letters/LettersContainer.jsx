import React from "react";
import StoreContext from "../../../../StoreContext";
import {Letters} from "./Letters";
import {changeMessageBodyCreator, sendMessageCreator} from "../../../../redux/messagesReducer";

export const LettersContainer = () => (
    <StoreContext.Consumer>
        {
            store => {
                const state = store.getState().messages;
                const dispatch = store.dispatch;
                const onMessageChange = (text) => {
                    dispatch(changeMessageBodyCreator(text));
                }
                const onMessageSend = (text) => dispatch(sendMessageCreator(text));
                return (
                    <Letters
                        messages={state.messages}
                        newMessageBody={state.newMessageBody}
                        onMessageChange={onMessageChange}
                        onMessageSend={onMessageSend}
                    />
                );
            }
        }
    </StoreContext.Consumer>
)