import React from "react";
import Iframe from './Iframe'
import axios from 'axios'

const API_KEY = 'ade9c792cc4b870cbac321b22d6a89ee';

class TournamentCreate extends React.Component{

    componentDidMount() {
        const url = 'https://api.jotform.com/form?apiKey=' + API_KEY;

     let body = {
            apikey: API_KEY,
            // questions: [{ 
            //     type: "control_head",
            //     text: "Form Title",
            //     order: "1",
            //     name: "Header"
            // },{ 
            //     type: "control_head",
            //     text: "Form Title",
            //     order: "2",
            //     name: "Header"
            // }],
            properties: {
                title: "New Form",
                height: "600"
            },
            // emails: [[
            // {
            //     type: "notification",
            //     name: "notification",
            //     from: "default",
            //     to: "noreply@jotform.com",
            //     subject: "New Submission",
            //     html: "false"
            // }]]
        }

        global.JF.createForm(JSON.stringify(body), (response)=>{
            console.log(response);
        }, (err) => console.error(err))

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