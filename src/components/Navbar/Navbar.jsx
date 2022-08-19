import React from "react";
import { NavItem } from "./NavItem/NavItem";
import s from "./Navbar.module.css";

export let Navbar = ({navItems}) => {
    return (
        <nav className={s.navbar}>
            {navItems.map(el => <NavItem to={el.to} key={el.to} active="active">{el.label}</NavItem>)}
        </nav>
    );
}