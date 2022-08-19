import {Profile} from "./Profile";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    headerImage: state.profile.headerImage,
    avatar: state.profile.avatar,
    info: state.profile.info,
});

const mapDispatchToProps = dispatch => ({});

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);