import React, {useEffect} from "react";
import {UserCard} from "./UserCard/UserCard";
import s from "./Users.module.css"
import axios from "axios";

export const UsersF = ({users, follow, unfollow, setUsers}) => {
    useEffect(() => {
        (async () => {
            const res = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
            setUsers(res.data.items)
        })();
    }, [setUsers])

    return (
        <div className={`content ${s.wrapper}`}>
            {users.map(u => <UserCard user={u} follow={follow} unfollow={unfollow} key={u.id}/>)}
        </div>
    )
}