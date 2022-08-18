import React from "react";
import {changeMessageBodyCreator, sendMessageCreator} from "../../../../redux/messagesReducer";
import s from "./Letters.module.css"

export const Letters = ({newMessageBody, messages, dispatch}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.messages}>
                {messages.map((m,i) => <div key={i} >{m.text}</div>)}
            </div>
            <div className={s.inputWrapper}>
            <textarea
                name="messageBox"
                rows="10"
                style={{resize: "none"}}
                className={s.input}
                value={newMessageBody}
                onChange={(e) => dispatch(changeMessageBodyCreator(e.target.value))}
            />
                <input
                    type="button"
                    value="Отправить"
                    onClick={() => dispatch(sendMessageCreator(newMessageBody))}
                />
            </div>
        </div>
    );
}