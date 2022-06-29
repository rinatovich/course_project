import React from 'react';
import Userinfo from './components/Userinfo';
import Posts from './Posts/Posts';
import style from './style/Profile.module.css';

const Profile = (props)=>{

    return (
        <div>
            <div className={style.wallpaper}><img src="https://www.itl.cat/pngfile/big/50-505834_download-nfs-hot-pursuit.jpg" alt="nature"/></div>
            <div className={style.user}>
                <Userinfo />
            </div>
            <Posts  state={props.state} dispatch={props.dispatch}/>
        </div>
        
    )
}
export default Profile;