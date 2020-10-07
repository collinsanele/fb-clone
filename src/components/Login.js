import React from 'react';
import './Login.css';
import {globalContext} from '../contexts/GlobalContext';


class Login extends React.Component{
    static contextType = globalContext;
    render(){
        const {login} = this.context;
        return (
            <div className="login">
                <div className="login__inner">
                    <img alt="fb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                    <img alt="fabebook" src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/>
                    <button onClick={login}>Sign In With Google</button>
                </div>
            </div>
        )
    }
}

export default Login;