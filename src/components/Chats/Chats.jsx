import React from 'react';
import UsersList from './components/UsersList';
import ChatWindow from './components/ChatWindow';
import style from './styles/Dialogs.module.css';

const Chats = (props)=>{
	return(
		<div className={style.dialogs}>
			<UsersList state={props.state} />
			<ChatWindow state={props.state} dispatch={props.dispatch}/>
		</div>
		)
}

export default Chats;