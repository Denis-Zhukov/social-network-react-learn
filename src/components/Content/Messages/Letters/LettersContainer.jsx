import {Letters} from "./Letters";
import {changeMessageBodyCreator, sendMessageCreator} from "../../../../redux/messagesReducer";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return ({
        messages: state.messages.messages,
        newMessageBody: state.messages.newMessageBody
    });
}

const mapDispatchToProps = dispatch => ({
    onMessageChange: (text) => dispatch(changeMessageBodyCreator(text)),
    onMessageSend: (text) => dispatch(sendMessageCreator(text))
})

export const LettersContainer = connect(mapStateToProps, mapDispatchToProps)(Letters);