import React, { PureComponent } from "react";
// import {
//     Bracket,
//     // BracketGame,
//     // BracketGenerator,
//     // Model,
//     GameComponent
// } from "react-tournament-bracket";
// import DEMO_DATA from "./demo-data";
// import JSOG from "jsog";
import { fetchAllForms } from "../actions";
import { connect } from 'react-redux';
import TournamentThumbnail from './TournamentThumbnail.js';

// TODO :: Research what is PureComponent and its difference from the Component

class ShowTournament extends PureComponent {
    componentDidMount() {
        this.props.fetchAllForms();
    }

    // state = {
    //     homeOnTopState: true,
    //     hoveredTeamId: null
    // };

    get tournaments() {
        /*
            {
                ongoing: [],
                past: [],
                future: []
            }
        */
        const now = new Date();
        var limit = new Date();
        limit.setDate(now.getDate()+7);
        console.log(limit);
        

        return Object.keys(this.props.forms).reduce((allForms, formID) => {
            const currentForm = this.props.forms[formID];
            const expire = new Date(currentForm.start);
            
            // TODO :: calculate on going and future events
            // ---------------1(past)---now---1(ongoing)-----now+7day----- 1(future)----

            if (now > expire) {
                return {
                    ...allForms,
                    pastTournaments: [...allForms.pastTournaments, currentForm]
                };
            }

            if (limit < expire) {
                return {
                    ...allForms,
                    futureTournaments: [...allForms.futureTournaments, currentForm]
                };
            }
            
            return {
                ...allForms,
                onGoingTournaments: [...allForms.onGoingTournaments, currentForm]
            };
        }, {
            onGoingTournaments: [],
            pastTournaments: [],
            futureTournaments: []
        });
    }

    handleTournamentClick(e) {
        // dispatch action to fetch submissions of the tournament form
        // change route => http://localhost:3000/TournamentShow/${formID}
        // render bracket from submissions
        // e.target.dataset.formId
    }

    render() {
        return (
            <div>
                <div>
                    <h3>On Going Tournaments</h3>
                    <div>
                        {
                            this.tournaments.onGoingTournaments.map(tourno => (
                                <TournamentThumbnail
                                    {...tourno}
                                    onClick={this.handleTournamentClick}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3>Past Tournaments</h3>
                    <div>
                        {
                            this.tournaments.pastTournaments.map(tourno => (
                                <TournamentThumbnail
                                    {...tourno}
                                    onClick={this.handleTournamentClick}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3>Future Tournaments</h3>
                    <div>
                        {
                            this.tournaments.futureTournaments.map(tourno => (
                                <TournamentThumbnail
                                    {...tourno}
                                    onClick={this.handleTournamentClick}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );

    }
}




const mapStateToProps = ({ tournamentFormsReducer }) => ({
    forms: tournamentFormsReducer
});

const mapDispatchToProps = {
    fetchAllForms
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShowTournament);
