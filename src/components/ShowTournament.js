import React, { PureComponent } from "react";

import { fetchAllForms } from "../actions";
import { connect } from 'react-redux';
import TournamentThumbnail from './TournamentThumbnail.js';

// TODO :: Research what is PureComponent and its difference from the Component

class ShowTournament extends PureComponent {
    componentDidMount() {
        this.props.fetchAllForms();
    }



    get tournaments() {
        
        const now = new Date();
        var limit = new Date();
        limit.setDate(now.getDate()+7);
        console.log(limit);
    
        

        return Object.keys(this.props.forms).reduce((allForms, formID) => {
            const currentForm = this.props.forms[formID];
            const expire = new Date(currentForm.start);
            console.log(expire + currentForm.title);

            if (limit < expire) {
                return {
                    ...allForms,
                    futureTournaments: [...allForms.futureTournaments, currentForm]
                };
            }

            if (expire < limit && expire > now) {
                
                return {
                    ...allForms,
                    onGoingTournaments: [...allForms.onGoingTournaments, currentForm]
                };
            }
                return {
                    ...allForms,
                    pastTournaments: [...allForms.pastTournaments, currentForm]
                };

        }, {
            onGoingTournaments: [],
            pastTournaments: [],
            futureTournaments: []
        });
    }

    handleTournamentClick(e) {
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
                    <h3>Past sTournaments</h3>
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
