import React from "react";
import s from "./Post.module.css";

export let Post = ({avatar, name, text, likes, dislikes}) => (
    <div>
        <img src={avatar} alt="avatar" className={s.avatar} />
        <span className={s.name}>{name}</span>
        <div className={s.text}>{text}</div>
        <div className={s.rating}>
            <span title="like" className={s.rate}>👍</span>
            <span title="likes" className={s.count}>{likes ?? 0}</span>
            <span title="dislike" className={s.rate}>👎</span>
            <span title="dislikes" className={s.count}>{dislikes ?? 0}</span>
        </div>
    </div>
);