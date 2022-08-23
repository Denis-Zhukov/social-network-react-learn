import React from "react";
import s from "./Header.module.css";
import logo from "./../../assets/logo.svg";
import {NavLink} from "react-router-dom";

export let Header = () => (
    <div className={s.header}>
        <img src={logo} alt="logo" className={s.logo}/>
        <NavLink to="/auth" className={s.auth}>Sign in</NavLink>
    </div>
);