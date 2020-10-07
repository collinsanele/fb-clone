import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';
import {globalContext} from './contexts/GlobalContext';


class App extends React.Component{
    static contextType = globalContext;
    
    
     
    render(){
      const {isLoggedIn, displayName, profilePic} = this.context;
      
      return (
        isLoggedIn ? 
        (<div className="app">
            <Navbar displayName={displayName} profilePic={profilePic}/>
            <Sidebar />
            <div className="app__body">
                
                <Feed />
                <Widget />
            </div>
        </div>) : 
        (<Login/>)
      );
    }
}

export default App;
