import React from "react";
import { PageBlock } from "./PageBlock/PageBlock";
import { Posts } from "./Posts/Posts";
import s from "./Profile.module.css";


export let Profile = ({className, header, avatar, info, posts, valueInput, dispatch}) => (
    <div className={`${s.content} ${className}`}>
        <img src={header} alt="Header" className={s.header} />
        <PageBlock avatar={avatar} info={info} />
        <Posts posts={posts} dispatch={dispatch} valueInput={valueInput} />
    </div>
);