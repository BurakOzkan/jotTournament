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


// TODO :: move this component to another file
const TournementThumbnail = ({ id, name, onClick }) => (
    <button onClick={onClick} data-form-id={id}>
        {name}
    </button>
);

class ShowTournament extends React.Component {
    componentDidMount() {
        // TODO :: dispatch action to fetch tournement forms
        // this action will fetch all user forms and filter them
        // in accordingly with their title prefix as __tournamentForm__
    }

    state = {
        homeOnTopState: true,
        hoveredTeamId: null
    };

    get onGoingTournements() {
        const { tournementForms } = this.props;
        return [];
    }

    handleTournementClick(e) {
        // dispatch action to fetch submissions of the tournement form
        // e.target.dataset.formId
    }

    render() {
        // On Going Tournements
        // Future Tournements
        // Past Tournements

        /*
            tournements [
                {
                    id,
                    name
                }
            ]
        */
        return (
            <div>
                <div>
                    <h3>On Going Tournements</h3>
                    <div>
                        {
                            this.onGoingTournements.map(tourno => (
                                <TournementThumbnail
                                    {...tourno}
                                    onClick={this.handleTournementClick}
                                />
                            ))
                        }
                    </div>
                </div>
                <h3>Future Tournements</h3>
                <h3>Past Tournements</h3>
            </div>
        );
        // return (
        //     <Bracket
        //         game={ROOT}
        //         homeOnTop={this.state.homeOnTopState}
        //         GameComponent={GameComponent}
        //     />
        // );
    }
}
export default ShowTournament;
