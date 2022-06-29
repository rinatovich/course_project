

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const addMessage = 'ADD-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

export let store ={
    _state: {
        companionsList: [
            {id: 1, name: 'Emma'},
            {id: 2, name: 'Jo'},
            {id: 3, name: 'Lolli'},
            {id: 4, name: 'Lily'},
            {id: 5, name: 'Jeremy'},

        ],
        messages: [
            {id: 1, message: 'hi', direct: 'send'},
            {id: 2, message: 'how are you? ', direct: 'recieved'},
            {id: 3, message: 'Thank u. what about u?', direct: 'send'},
            {id: 4, message: 'im fine too', direct: 'recieved'},
            {id: 5, message: 'see u again', direct: 'send'},
            {id: 5, message: 'New message', direct: 'send'},
        ],
        posts: [
            {id: 1, text: 'Hello world', likesCount: 30},
            {id: 2, text: 'Its my first post', likesCount: 20},
            {id: 3, text: 'Yahhooooooo', likesCount: 20},
            {id: 4, text: 'uauauuuauaauau', likesCount: 10}
        ],
        newPostText: "",
        newMessageText: "",
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){},
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST'){
            this._state.posts.push({id:5, text: this._state.newPostText, likesCount: 1});
            this._state.newPostText = '';
            this._callSubscriber();
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.newPostText = action.newPostText;
            this._callSubscriber();
        }
        else if(action.type===addMessage){
            this._state.messages.push({id:7, message: this._state.newMessageText, direct: 'send'});
            this._callSubscriber();
            this._state.newMessageText = "";
        }
        else if(action.type===updateNewMessageText){
            this._state.newMessageText = action.newMessageText;
            this._callSubscriber();
        }
    },
}

export const addMessageActionCreator = ()=>{
    return{
        type: addMessage
    }
}
export const updateNewMessageTextActionCreator = (text)=>{
    return{
        newMessageText: text,
        type: updateNewMessageText
    }
}
export const addPostActionCreator = ()=>{
    return{
        type: addPost
    }
}
export const updateNewPostTextActionCreator = (text)=>{
    return{
        newPostText: text,
        type: updateNewPostText
    }
}