import React from "react";
import { PageBlock } from "./PageBlock/PageBlock";
import { Posts } from "./Posts/Posts";
import s from "./Profile.module.css";
import header from "./../../../assets/header.jpg";


export let Profile = () => (
    <div className={s.content}>
        <img src={header} alt="Header" className={s.header} />
        <PageBlock classNmae={s.pageBlock} />
        <Posts />
    </div>
);