import React from 'react';
import style from '../style/Profile.module.css';

const Userinfo = ()=>{
    return (
        <div className={style.content}>
            <div className={style.image}>
                <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="user_image" />
            </div>
            <div className={style.name}>James A.</div>
            <div className={style.row}>
                <div className={style.property}>Date of birth:</div>
                <div className="user_dateOfBirth">2 january</div>
            </div>
            <div className={style.row}>
                <div className={style.property}>City:</div>
                <div className="user_city">Moscow</div>
            </div>
            <div className={style.row}>
                <div className={style.property}>Education:</div>
                <div className="user_eduaction">BSU'11</div>
            </div>
            <div className={style.row}>
                <div className={style.property}>Web Site:</div>
                <div className="user_website">https://hello-world.com</div>
            </div>
        </div>
    )
}
export default Userinfo;