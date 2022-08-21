import React from "react";
import {UserCard} from "./UserCard/UserCard";
import axios from "axios";
import s from "./Users.module.css"

export class UsersC extends React.Component {
    getUsers = async (pageNumber = this.props.currentPage) => {
        console.log(this.props.currentPage);
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
        debugger
        const pagesCount = Math.min(Math.ceil(this.props.totalUsersCount / this.props.pageSize), 10);

        const pages = new Array(pagesCount).fill(0).map((_, i) => (
            <span
                className={`${this.props.currentPage === (i + 1) && s.selectedPage} ${s.page}`}
                onClick={() => this.onPageChanged(i + 1)}
            >{i + 1}</span>));

        return (
            <div className={`content ${s.wrapper}`}>
                <div className={s.pagination}>
                    {pages}
                </div>
                {this.props.users.map(u => <UserCard user={u} follow={this.props.follow} unfollow={this.props.unfollow}
                                                     key={u.id}/>)}
            </div>
        )
    }
}