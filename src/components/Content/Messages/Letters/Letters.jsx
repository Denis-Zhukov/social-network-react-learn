import React from "react";
import s from "./Letters.module.css"

export const Letters = ({newMessageBody, messages, onMessageChange, onMessageSend}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {messages.map((m, i) => <div key={i}>{m.text}</div>)}
            </div>
            <div className={s.inputWrapper}>
            <textarea
                name="messageBox"
                rows="10"
                style={{resize: "none"}}
                className={s.input}
                value={newMessageBody}
                onChange={(e) => onMessageChange(e.target.value)}
            />
                <input
                    type="button"
                    value="Отправить"
                    onClick={() => onMessageSend(newMessageBody)}
                />
            </div>
        </div>
    );
}