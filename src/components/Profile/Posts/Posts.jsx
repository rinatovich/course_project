import React from 'react';
import PostInput from './components/PostInput';
import PostsWindow from './components/PostsWindow.jsx';
import style from './style/Posts.module.css';
const Posts = (props)=>{
    return (
        <div className={style.posts}>
            <PostInput dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            <PostsWindow posts={props.state.posts} />
        </div>
    )
}
export default Posts;