import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPIComponent extends React.Component {
    getUsers = async (pageNumber = this.props.currentPage) => {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    componentDidMount() {
        this.getUsers();
    }


    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
        />
    }
}