import React, {createContext} from 'react';
import firebase from 'firebase';
import {provider} from '../firebase';
import {db} from '../firebase';

//message
//image  https://64.media.tumblr.com/98fa32da28c5270fc0d225e19fd82669/tumblr_mu3i966OT91qexr74o2_r1_250.gifv
//time  firebase.firestore.FieldValue.serverTimestamp()

const globalContext = createContext();


class GlobalContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg: "",
            pic_url: "",
            displayName: "Anonymous",
            profilePic: "",
            isLoggedIn: false,
            posts: []
        }
    }
    
    
    //for facebook post input change
    handleInputChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    
    //for facebook post submit
    handleMessageSubmit = (e)=>{
        e.preventDefault();
        
        if(this.state.msg.trim()=== ""){
            return false
        }
        
        this.setState({msg: e.target.value, pic_url: e.target.value})
        this.addDocument(this.state.pic_url, this.state.msg, new Date())
       
    }
    
    
    //for Google login
    login = ()=>{
        //photoURL
        //displayName
        firebase.auth().signInWithPopup(provider)
        .then((result)=>{
            this.setState({isLoggedIn: Boolean(result.user.displayName), 
            displayName: result.user.displayName,
            profilePic: result.user.photoURL,
            thumbnail: result.user.photoURL})
        })
        .catch((e)=> alert(e.message))
    }
    
    
    //get documents from firestore (posts collection) 
    getDocuments = ()=>{
        db.collection("posts")
        .orderBy('time', 'desc')
        .onSnapshot((snapshot)=>{
            snapshot.docs.map((item)=>(
                this.setState({posts: [...this.state.posts, item.data()]})
            ))
            
        })
    }
    
    
    // Add a new document with a generated id.
    addDocument = (image, message, time)=>{
        this.setState({posts: []})
        db.collection("posts").add(image ? ({
            image: image,
            message: message,
            time: time
        }) : ({message: message, time: time}))
        .then((docRef)=>{
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error)=> {
            console.error("Error adding document: ", error);
        })
    }


    
    
    render(){
        return (
            <globalContext.Provider 
                value={{...this.state, 
                handleMessageSubmit: this.handleMessageSubmit,
                handleInputChange: this.handleInputChange,
                login: this.login,
                getDocuments: this.getDocuments,
                addDocument: this.addDocument
                }}
             >
                {this.props.children}
            </globalContext.Provider>
        )
    }
}


export {globalContext, GlobalContextProvider};