import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import logo from "./../../../../assets/logo.svg";
import s from "./PageBlock.module.css";


const info = {
    fullname: "Denis Zhukov",
    dateOfBirth: "21 June",
    education: "GSTU",
    city: "Mozyr",
    webSite: "github.com/HachikoR",
};

export let PageBlock = () => (
    <div className={s.block}>
        <img src={logo} alt="Avatar" className={s.avatar} />
        <InfoBlock {...info} />
    </div>
);