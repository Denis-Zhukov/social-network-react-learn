import React from "react";
import s from "./InfoBlock.module.css";

export let InfoBlock = ({fullname, dateOfBirth, city, education, webSite}) => (
    <div>
        <div className={s.title}>{fullname}</div>
        {dateOfBirth && <div>Date of Birth: {dateOfBirth}</div>}
        {city && <div>City: {city}</div>}
        {education && <div>Education: {education}</div>}
        {webSite && <div>Web Site: <a href={webSite} target="_blank">{webSite}</a></div>}
    </div>
);