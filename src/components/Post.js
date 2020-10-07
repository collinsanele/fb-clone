import React from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyIcon from '@material-ui/icons/Reply';
import moment from 'moment';
//import IconButton from '@material-ui/core/IconButton';


class Post extends React.Component{
  
    render(){
        const {name, time, message, image, thumbnail} = this.props;
        return (
            <div className="post">
                <div className="post__header">
                    <div className="post__header__left">
                    
                        <Avatar src={thumbnail}/>
                        
                        <div className="post__header__left__name">
                            <h4>{name}</h4>
                            <section className="post__header__left__name__small">
                                <span>
                                {`${moment(new Date(time.toDate())).utc().fromNow()}`}
                                    {/*{new Date(time.toDate()).toLocaleString()} */}
                                        
                                </span>
                                
                                
                                <FiberManualRecordIcon className="dot"/>
                                
                                <PublicIcon className="world-icon"/>
                                
                            </section>
                        </div>
                    </div>
                    
                    <div className="post__header__right">
                        <MoreHorizIcon className="dots"/>
                    </div>
                </div>
                
                <div className="post__text">
                    <p>{message}</p>
                </div>
                
                <div className="post__image">
                    {image && 
                        <img 
                            alt="post-fb"
                            src={image} 
                        />
                    }
                </div>
                
                <div className="post__info">
                    <div className="post__info__first">
                        
                        <ThumbUpAltOutlinedIcon />
                        <p>Like</p>
                        
                    </div>
                    
                    <div className="post__info__second">
                        <ChatBubbleOutlineOutlinedIcon />
                        <p>Comment</p>
                    </div>
                    
                    <div className="post__info__third">
                        <ReplyIcon />
                        <p>Share</p>
                    </div>
                </div>
                
                {/* <div className="post__like">
                </div> */}
                
                <div className="post__comment">
                    <div className="post__comment__inner">
                        <Avatar src={thumbnail}/>
                        
                        <div className="post__comment__input">
                            <input type="text" placeholder="Write a comment" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;