import React from "react";
import {UserCard} from "./UserCard/UserCard";
import s from "./Users.module.css"

export const Users = ({users, follow, unfollow}) => {
    return (
        <div className={`content ${s.wrapper}`}>
            {users.map(u => <UserCard user={u} follow={follow} unfollow={unfollow} key={u.id}/>)}
        </div>
    )
}