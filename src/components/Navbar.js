import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Avatar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css';



class Navbar extends React.Component{
    render(){
        const {profilePic, displayName} = this.props;
        return (
            <nav className="navbar">
                <div className="navbar__left">
                    <img alt="facebook-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                    
                    <div className="navbar__input">
                        <SearchIcon />
                        <input placeholder="Search Facebook" type="text" />
                    </div>
                </div>
                
                <div className="navbar__center">
                    <div className="navbar__option active">
                        <HomeIcon />
                    </div>
                    
                    <div className="navbar__option">
                        <FlagIcon />
                    </div>
                    
                    <div className="navbar__option">
                        <SubscriptionsOutlinedIcon />
                    </div>
                    
                    <div className="navbar__option">
                        <StorefrontIcon />
                    </div>
                    
                    <div className="navbar__option">
                        <SupervisedUserCircleIcon />
                    </div>
                </div>
                
                <div className="navbar__right">
                    <Avatar src={profilePic} className="avatar"/>
                    <h4>{displayName}</h4>
                    <IconButton >
                        <AddIcon />
                    </IconButton>
                    <IconButton >
                        <ForumIcon />
                    </IconButton >
                    <IconButton >
                        <NotificationsActiveIcon />
                    </IconButton >
                    <IconButton >
                        <KeyboardArrowDownIcon />
                    </IconButton >
                </div>
                
                
            </nav>
        )
    }
}


export default Navbar;