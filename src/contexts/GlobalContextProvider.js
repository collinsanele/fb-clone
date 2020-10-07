import React, {createContext} from 'react';


const globalContext = createContext();


class GlobalContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            test: "Lol"
        }
    }
    
    render(){
        return (
            <globalContext.Provider value={{...this.state}}>
                {this.props.childern}
            </globalContext.Provider>
        )
    }
}


export {globalContext, GlobalContextProvider};