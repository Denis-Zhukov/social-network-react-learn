import React from "react";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import s from "./PageBlock.module.css";

export let PageBlock = ({avatar, info}) => (
    <div className={s.block}>
        <img src={avatar} alt="Avatar" className={s.avatar} />
        <InfoBlock {...info} />
    </div>
);