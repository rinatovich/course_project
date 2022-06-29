import React from 'react';
import User from './User';
import style from '../styles/Dialogs.module.css';


const UsersList = (props)=>{
    let usersList = props.state.companionsList.map((d)=><User id={d.id} name={d.name}/>)

    return(
        <div className={style.companions_list}>
            {usersList}
        </div>
    )
}
export default UsersList;