import React from "react";
import s from "./UserCard.module.css"
import {NavLink} from "react-router-dom";

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png";

export const UserCard = ({user, follow, unfollow}) => {
    return (
        <div className={s.card}>
            <div className={s.leftBlock}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ?? url} alt="avatar"/>
                </NavLink>
                <button
                    onClick={user.followed ?
                        () => unfollow(user.id) :
                        () => follow(user.id)
                    }
                >{user.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={s.rightBlock}>
                <div className={s.userBlock}>
                    <div className="fullName">{user.name}</div>
                    <div className="status">{user.status}</div>
                </div>
                <div className="address">{user.location?.country}, {user.location?.city}</div>
            </div>
        </div>
    )
}