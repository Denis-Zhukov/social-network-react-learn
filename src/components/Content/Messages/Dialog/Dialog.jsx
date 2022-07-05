import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

export const Dialog = ({id, name}) => (
    <NavLink to={`${id}`} className={({isActive}) => `${isActive && s.active} ${s.item}`}> {name}</NavLink>
);