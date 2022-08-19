import React from "react";
import {Dialog} from "./Dialog/Dialog";
import s from "./Messages.module.css";
import {LettersContainer} from "./Letters/LettersContainer";

export const Messages = ({className, dialogs}) => (
    <div className={`${s.wrapper} ${className}`}>
        <div>
            {dialogs.map(d => <Dialog key={d.id} {...d} />)}
        </div>
        <LettersContainer/>
    </div>
);