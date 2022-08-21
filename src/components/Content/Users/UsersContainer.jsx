import {connect} from "react-redux";
import {UsersC} from "./UsersC";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../../redux/usersRudecer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);