import React from "react";
import {PageBlock} from "./PageBlock/PageBlock";
import {PostsContainer} from "./Posts/PostsContainer";
import s from "./Profile.module.css";


export let Profile = ({className, headerImage, avatar, info}) => (
    <div className={`${s.content} ${className}`}>
        <img src={headerImage} alt="Header" className={s.header}/>
        <PageBlock avatar={avatar} info={info}/>
        <PostsContainer/>
    </div>
);