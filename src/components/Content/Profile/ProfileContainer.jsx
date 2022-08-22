import {ProfileAPIComponent} from "./ProfileAPIComponent";
import {connect} from "react-redux";
import {setProfile} from "../../../redux/profileReducer";


const mapStateToProps = state => ({
    headerImage: state.profile.headerImage,
    avatar: state.profile.avatar,
    info: state.profile.info,
});

export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileAPIComponent);