import React from 'react';
import './Sidebar.css';
import SideBarRow from './SideBarRow';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {globalContext} from '../contexts/GlobalContext';



class Sidebar extends React.Component{
    static contextType = globalContext;
    render(){
        const {profilePic, displayName} = this.context;
        return (
            <div className="sidebar">
                <SideBarRow 
                    text={displayName.toLowerCase()} 
                    src={profilePic}
                />
                
                
                <SideBarRow 
                    text="COVID-19 Information Center" 
                    Icon= {<LocalHospitalIcon />}
                />
                
                <SideBarRow 
                    text="Pages" 
                    Icon= {<EmojiFlagsIcon />}
                />
                
                <SideBarRow 
                    text="Friends" 
                    Icon= {<PeopleIcon />}
                />
                
                <SideBarRow 
                    text="Messenger" 
                    Icon= {<ChatIcon />}
                />
                
                <SideBarRow 
                    text="Marketplace" 
                    Icon= {<StorefrontIcon />}
                />
                
                <SideBarRow 
                    text="Videos" 
                    Icon= {<VideoLibraryIcon />}
                />
                
                <SideBarRow 
                    text="Marketplace" 
                    Icon= {<ExpandMoreIcon />}
                />
                
            </div>
        )
    }
}


export default Sidebar;