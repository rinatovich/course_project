import React from 'react';
import style from '../styles/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const User = (props)=>{
    return (
        <NavLink activeClassName={style.activeCompanion} to={'/dialogs/'+props.name} className={style.companion}>
            <div className={style.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SeTaeODhJ16bUaV341S_MVdPKgIQxRgjIg&usqp=CAU" alt=""/>
            </div>
            <div className={style.info}>
                <div className={style.name}>{props.name}</div>
            </div>
        </NavLink>
    )
}
export default User;