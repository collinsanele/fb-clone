import React from 'react';
import './Widget.css';



class Widget extends React.Component{
    render(){
        return (
            <div className="widget" style={{objectFit: "contain"}}>
                <div className="fb-video">
                    
                    <iframe 
                        title="iframe"
                        className="fb-page" 
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                        width= {"348px"}
                        height= {"2000px"}
                        style={{border: "none", overflow: "hidden"}}/>
                    
                </div>
                
            {/*<iframe 
                    title="iframe"
                    className="fb-page" 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    data-tabs="timeline" data-width={"300"} data-height={"300"} data-small-header="false" 
                    data-adapt-container-width="true" 
                    data-hide-cover="false" 
                    data-show-facepile="true"
                    width= {"340px"}
                    height= {"100%"}
                    style={{border: "none", overflow: "hidden"}}
            /> */}
                
            </div>
        )
    }
}


export default Widget;