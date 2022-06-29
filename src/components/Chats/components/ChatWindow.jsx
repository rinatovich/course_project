import React from 'react';
import InputMessage from './InputMessage';
import style from '../styles/Dialogs.module.css';
import Message from './Message';

const ChatWindow  = (props)=>{
    let messages = props.state.messages.map((m)=><Message direction={m.direct} messageText={m.message}/>);
    return (
        <div className={style.messages}>
            <div className={style.messagesDisplay}>
                {messages}
            </div>
            <InputMessage dispatch={props.dispatch} state={props.state}/>
        </div>
    )
}

export default ChatWindow;