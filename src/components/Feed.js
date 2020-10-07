import React from "react";
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import {globalContext} from '../contexts/GlobalContext';



class Feed extends React.Component{
    static contextType = globalContext;
    
    componentDidMount(){
        this.context.getDocuments();
    }
    
    render(){
        const {posts, thumbnail, displayName} = this.context; 
     
        return (
            <div className="feed">
                <StoryReel />
                <MessageSender />
                
                {
                   posts.map(post=>(
                       <Post
                            key={Math.ceil(Math.random()*10000000000000000)}
                            name={displayName}
                            time={post.time}
                            message={post.message}
                            image={post.image}
                            thumbnail={thumbnail}
                        />)
                )}
                
            </div>
        )
    }
}


export default Feed;