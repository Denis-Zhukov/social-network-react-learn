import React from "react";
import s from "./Header.module.css";
import logo from "./../../assets/logo.svg";

export let Header = () => (
    <div className={s.header}>
        <img src={logo} alt="logo" className={s.logo} />
    </div>
);