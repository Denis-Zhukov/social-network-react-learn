import {connect} from "react-redux";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsLoading,
    unfollow
} from "../../../redux/usersRudecer";

const mapStateToProps = (state) => ({
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isLoading: state.users.isLoading
})

export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading
})(UsersAPIComponent);