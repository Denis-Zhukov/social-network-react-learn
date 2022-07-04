import React from "react";
import { NavItem } from "./NavItem/NavItem";
import s from "./Navbar.module.css";

const navItems = [
    {label: "Profile", to: "profile"},
    {label: "Messages", to: "messages"},
    {label: "News", to: "news"},
    {label: "Music", to: "music"},
    {label: "Settings", to: "settings"},
];

export let Navbar = () => (
    <nav className={s.navbar}>
        {navItems.map(el => <NavItem to={el.to} key={el.to} active="active">{el.label}</NavItem>)}
    </nav>
);