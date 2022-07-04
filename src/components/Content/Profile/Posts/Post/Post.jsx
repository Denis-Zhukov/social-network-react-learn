import React from "react";
import s from "./Post.module.css";

export let Post = ({avatar, name, children: text}) => (
    <div className={s.post}>
        <img src={avatar} alt="avatar" className={s.avatar} />
        <span className={s.name}>{name}</span>
        <div className={s.text}>{text}</div>
    </div>
);