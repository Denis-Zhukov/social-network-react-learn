import React from "react";
import {UserCard} from "./UserCard/UserCard";
import s from "./Users.module.css";

export const Users = ({totalUsersCount, pageSize, follow, unfollow, onPageChanged, currentPage, users, isLoading}) => {
    const pagesCount = Math.min(Math.ceil(totalUsersCount / pageSize), 10);

    const pages = new Array(pagesCount).fill(0).map((_, i) => (
        <span key={i}
              className={`${currentPage === (i + 1) && s.selectedPage} ${s.page}`}
              onClick={() => onPageChanged(i + 1)}
        >{i + 1}</span>));

    return (
        <div className={`content ${s.wrapper}`}>
            <div className={s.pagination}>
                {pages}
            </div>
            {
                isLoading ?
                    "Загрузка..." :
                    users.map(u => <UserCard user={u} follow={follow} unfollow={unfollow} key={u.id}/>)
            }
        </div>
    )
}