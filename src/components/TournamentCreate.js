import React from "react";
import Iframe from './Iframe'


class TournamentCreate extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
          src: 'https://form.jotform.com/92181413902956'
        };
    
        // This binding is necessary to make `this` work in the callback
      }
    

    render(){
        return( 


            
            <Iframe source={this.state.src} />
            
            
            
            
            );

        
    }
}export default TournamentCreate;