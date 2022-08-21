import React from "react";
import {UserCard} from "./UserCard/UserCard";
import s from "./Users.module.css"
import axios from "axios";

export const Users = ({users, follow, unfollow, setUsers}) => {
    if (users.length === 0) {
        (async () => {
            const res = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
            setUsers(res.data.items)
        })();
    }

    return (
        <div className={`content ${s.wrapper}`}>
            {users.map(u => <UserCard user={u} follow={follow} unfollow={unfollow} key={u.id}/>)}
        </div>
    )
}