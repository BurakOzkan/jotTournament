import React from "react";
import {
    Bracket,
    // BracketGame,
    // BracketGenerator,
    // Model,
    GameComponent
} from "react-tournament-bracket";
import DEMO_DATA from "./demo-data";
import JSOG from "jsog";
// import axios from "axios";
// const API_KEY = "ade9c792cc4b870cbac321b22d6a89ee";
// const formID = "92181413902956";

const GAMES = JSOG.decode(DEMO_DATA);
const ROOT = GAMES.filter(e => {
    return e.id === "35b0745d-ef13-4255-8c40-c9daa95e4cc4";
})[0];
// console.log(GAMES);
// SAGA
// https://github.com/svrcekmichal/redux-axios-middleware Redux ile yapıp bunu mu kullanmalıyım

class ShowTournament extends React.Component {
    componentDidMount() {
        // console.log(ROOT);
    }

    state = {
        homeOnTopState: true,
        hoveredTeamId: null
    };

    render() {
        return (
            <Bracket
                game={ROOT}
                homeOnTop={this.state.homeOnTopState}
                GameComponent={GameComponent}
            />
        );
    }
}
export default ShowTournament;
