import React from 'react';
import './StoryReel.css';
import Story from './Story';



class StoryReel extends React.Component{
    render(){
        return (
            <div className="storyReel">
                <Story 
                    bgImg={"https://images.unsplash.com/photo-1601589813080-84c5e230cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80"}
                    avatarImg={"https://images.unsplash.com/photo-1598287635191-b1f774662778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                />
                
                <Story 
                    bgImg={"https://images.unsplash.com/photo-1595400745623-72f6a3226287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    avatarImg={"https://images.unsplash.com/photo-1580999576838-1cf77449b74a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    
                />
                
                
                <Story
                    bgImg={"https://images.unsplash.com/photo-1593010097611-abf6238ee3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    avatarImg={"https://images.unsplash.com/photo-1593010097611-abf6238ee3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    
                />
                
                
                <Story
                    bgImg={"https://images.unsplash.com/photo-1601070582672-52888eb40aff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"}
                    avatarImg={"https://images.unsplash.com/photo-1563165877-8c3bf6736f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    
                />
                
            </div>
        )
    }
}

export default StoryReel;