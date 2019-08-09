import React from "react";
import { Bracket, BracketGame, BracketGenerator, Model ,GameComponent } from 'react-tournament-bracket';
import DEMO_DATA from './demo-data';
import JSOG from "jsog";
const GAMES = JSOG.decode(DEMO_DATA);
const ROOT  = GAMES.filter((e) => {
    return e.id === '35b0745d-ef13-4255-8c40-c9daa95e4cc4';
})[0]


class ShowTournament extends React.Component{
    
    componentDidMount() {
        console.log(ROOT);
    }

    state = {
        homeOnTopState: true,
        hoveredTeamId: null
      };
    
    render(){

        return(
            <GameComponent game={ROOT} homeOnTop={this.state.homeOnTopState}/>
//<div>sa</div>
            );

        
    }
}export default ShowTournament;


