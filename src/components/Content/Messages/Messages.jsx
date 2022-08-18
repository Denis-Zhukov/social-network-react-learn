import React from "react";
import { Dialog } from "./Dialog/Dialog";
import { Letters } from "./Letters/Letters";
import s from "./Messages.module.css";

export const Messages = ({className, dialogs, newMessageBody, messages, dispatch}) => (
    <div className={`${s.wrapper} ${className}`}>
        <div>
            {dialogs.map(d => <Dialog key={d.id} {...d} />)}
        </div>
        <Letters newMessageBody={newMessageBody} messages={messages} dispatch={dispatch}/>
    </div>
);