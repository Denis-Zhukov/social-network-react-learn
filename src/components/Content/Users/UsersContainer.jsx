import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsLoadingAC,
    unfollowAC
} from "../../../redux/usersRudecer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
    toggleIsLoading: (isLoading) => dispatch(toggleIsLoadingAC(isLoading))
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);