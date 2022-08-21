import React from "react";
import {UserCard} from "./UserCard/UserCard";
import axios from "axios";
import s from "./Users.module.css"

export class UsersC extends React.Component {
    getUsers = async () => {
        const res = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
        this.props.setUsers(res.data.items)
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }


    render() {
        return (
            <div className={`content ${s.wrapper}`}>
                {this.props.users.map(u => <UserCard user={u} follow={this.props.follow} unfollow={this.props.unfollow}
                                                     key={u.id}/>)}
            </div>
        )
    }
}