import React from 'react';
import Post from './Post';
import style from '../style/Posts.module.css';
const PostsWindow = (props)=>{
    let posts = props.posts.map((p)=><Post text = {p.text} likesCount = {p.likesCount}/>)
    return (
        <div className={style.postsarea}>
            {posts}
        </div>
    )
}
export default PostsWindow;