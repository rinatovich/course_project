import React from 'react';
import style from '../styles/Dialogs.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/store";


const InputMessage = (props)=>{
    let messageOnChange = (event)=>{
        props.dispatch(updateNewMessageTextActionCreator(event.target.value));
    }
    let addNewMessage = ()=>{
        props.dispatch(addMessageActionCreator());
    }
    return (
        <div className={style.bottomBar}>
            <textarea onChange={messageOnChange} name="message" id={style.messageInput} value={props.state.newMessageText}></textarea>
            <button onClick={addNewMessage} className={style.btn}><i class="fas fa-arrow-right"></i></button>
        </div>
    )
}
export default InputMessage;