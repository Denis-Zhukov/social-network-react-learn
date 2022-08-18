const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const messagesReducer = (state, action) => {

    const setValueNewMessage = (value) => {
        state.newMessageBody = value;
    };

    const sendMessage = (message) => {
        state.messages.push({id: 6, text: message});
        state.newMessageBody = "";
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            setValueNewMessage(action.text);
            break;
        case SEND_MESSAGE:
            sendMessage(action.text);
            break;
        default: break;
    }

    return state;
}