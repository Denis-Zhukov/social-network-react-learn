const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessageCreator = (text) => ({
    type: SEND_MESSAGE, text
})

export const changeMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text
    };
}

const initialState = {
    dialogs: [
        {id: 12, name: "Denis Zhukov"},
        {id: 3203, name: "Artem Mishchenko"},
        {id: 320, name: "Anna Glushenok"},
    ],

    messages: [
        {id: 1, text: "Hi"},
    ],
    newMessageBody: "1"
};

export const messagesReducer = (state = initialState, action) => {
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
        default:
            break;
    }

    return state;
}