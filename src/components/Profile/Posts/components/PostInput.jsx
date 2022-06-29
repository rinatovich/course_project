import React from 'react';
import style from '../style/Posts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";


const PostInput = (props)=>{
    let textarea = React.createRef();
    let updatePostInput = ()=>{
        props.dispatch(updateNewPostTextActionCreator(textarea.current.value));
    }
    let addNewPost = ()=>{
        props.dispatch(addPostActionCreator());
    }
    return (
        <div className={style.postinput}>
            <div className={style.title}>My posts</div>
            <textarea ref={textarea} onChange={updatePostInput} type="text" className={style.input} value={props.newPostText}></textarea>
            <div className={style.btn_section}><button onClick={addNewPost} >Send</button></div>
        </div>
    )
}
export default PostInput;