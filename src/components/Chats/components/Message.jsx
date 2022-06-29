import React from 'react';
import style from '../styles/Dialogs.module.css';

const Message = (props)=>{
    let direction;
    if (props.direction === 'send'){
        direction = style.send;
    }
    else{
        direction = style.recieved;
    }
    return (
        <div className={style.message +" "+direction }>
            {props.messageText}
        </div>
    )
}
export default Message;