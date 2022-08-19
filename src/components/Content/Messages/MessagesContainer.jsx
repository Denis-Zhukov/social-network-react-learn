import {Messages} from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    dialogs: state.messages.dialogs
})

const mapDispatchToProps = () => ({})

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);