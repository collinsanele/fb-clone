import React from 'react';
import "./Story.css";
import {Avatar} from '@material-ui/core';

//'url('+'https://images.unsplash.com/photo-1601460075148-ab400fe05e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'+')'}}

class Story extends React.Component{
    render(){ 
        const {bgImg, avatarImg} = this.props;
        return (
            <div 
                style={{backgroundImage: `url(${bgImg})`}} 
                className="story">
                <Avatar className="story__avatar" src={avatarImg} /> 
            </div>
        )
    }
}

export default Story;