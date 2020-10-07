import React from 'react';
import './MessageSender.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {globalContext} from '../contexts/GlobalContext';


class MessageSender extends React.Component{
    static contextType = globalContext;
    render(){
        const {handleMessageSubmit, 
        handleInputChange, 
        msg, 
        pic_url, 
        displayName, 
        profilePic} = this.context;
        
        return (
            <div className="messageSender">
                <div className="messageSender__top">
                    <Avatar src={profilePic}/>
                    <form onSubmit = {handleMessageSubmit}>
                        <input onChange={handleInputChange} 
                            value={msg || ""} 
                            name="msg" 
                            className="messageSender__input" 
                            placeholder={`What's on your mind, ${displayName.toLowerCase()}?`}
                            type="text" 
                        />
                        
                        <input 
                            onChange={handleInputChange} 
                            value={pic_url || ""} 
                            name="pic_url" 
                            placeholder="image Url (Optional)" 
                            type="text" />
                            
                        <button type="submit">Hidden Submit</button>
                    </form>
                </div>
                
                <div className="messageSender__button">
                    <div className="messageSender__option">
                        <VideocamIcon className="first"/>
                        <h3>Live Video </h3>
                    </div>
                    
                    <div className="messageSender__option">
                        <PhotoLibraryIcon className="second"/>
                        <h3>Photo/Video</h3>
                    </div>
                    
                    <div className="messageSender__option">
                        <InsertEmoticonIcon className="third"/>
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessageSender;