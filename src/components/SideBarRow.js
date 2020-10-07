import React from 'react';
import './SideBarRow.css';
import {Avatar} from '@material-ui/core';

class SideBarRow extends React.Component{
    render(){
        const {text, src, Icon} = this.props;
     
        return (
            <div className="sidebarRow">
                <div>
                    {src ? (<Avatar src={src} />) : (Icon)}
                </div>
                
                <h4>{text}</h4>
            </div>
        )
    }
}

export default SideBarRow;