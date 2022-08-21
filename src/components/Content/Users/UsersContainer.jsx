import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersRudecer";

const mapStateToProps = (state) => ({
    users: state.users.users
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);