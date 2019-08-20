import React from "react";
import Iframe from './Iframe'
import axios from 'axios'

const API_KEY = 'ade9c792cc4b870cbac321b22d6a89ee';

class TournamentCreate extends React.Component{

    componentDidMount() {
        const url = 'https://api.jotform.com/form?apiKey=' + API_KEY;
let baslik = "Tourr";

let formJSON = {
    "properties": {
        "title": `Form Baslık:${baslik}`,
        "height": "600"
    },

}

     


        // GETFORM
        // window.JF.getForm("92181413902956", function(response){
        //         *
        //          successful response including form data with given id
        //          .
                 
        //          console.log(response);  
        //     });

        //FORM CREATE
        window.JF.createForms(JSON.stringify(formJSON),function(response){
            /**
             successful response including created form object
             *
             */
             console.log(response);
        });
        // axios.post(url, body).then(obj => {
        //         console.log(obj.data);
        //     })
    }
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