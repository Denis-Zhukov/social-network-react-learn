import React from "react";
import s from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export const NavItem = ({children: text, ...props}) => (
    <NavLink {...props} className={({isActive}) => (isActive ? s.active + " " : "") + s.navItem}>{text}</NavLink>
);