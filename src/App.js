import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      src: 'https://form.jotform.com/92181413902956'
    };

    // This binding is necessary to make `this` work in the callback
  }


    handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
  
  
  render(){
    return(
    <div className="App">
    <header className="App-header">
      
      
      <img src={logo} className="App-logo" alt="logo"/>
      <p>JotTournament</p>
      
      
    </header>
  </div>
    );
  }
  
  
  

}


export default App;


