import React, { PureComponent } from "react";

import { fetchAllForms, fetchAllTournamentSubmissions ,fetchAllTeams} from "../actions";
import { connect } from 'react-redux';
import TournamentThumbnail from './TournamentThumbnail.js';
import { Alert } from 'react-bootstrap';


// TODO :: Research what is PureComponent and its difference from the Component

class ShowTournament extends PureComponent {

    
    
    
    componentDidMount() {
        this.props.fetchAllForms();
    }



    get tournaments() {
        
        const now = new Date();
        var limit = new Date();
        limit.setDate(now.getDate()+7);
    
        

        return Object.keys(this.props.forms).reduce((allForms, formID) => {
            const currentForm = this.props.forms[formID];
            const expire = new Date(currentForm.start);

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



    }

    render() {
        return (
            <div>
                <div>
                
                <Alert variant="dark">On Going Tournaments </Alert>
                    <div>
                        {
                            this.tournaments.onGoingTournaments.map(tourno => (
                                <TournamentThumbnail
                                    {...tourno}
                                    onClick={this.props.fetchAllTeams}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                <br></br>
                <Alert variant="dark">Past sTournaments</Alert>
                    <div>
                        {
                            this.tournaments.pastTournaments.map(tourno => (
                                <TournamentThumbnail
                                    {...tourno}
                                    onClick={this.props.fetchAllTeams}
                                />
                            ))
                        }
                    </div>
                </div>
                
                <div>
                <br></br>

                <Alert variant="dark">Future Tournaments</Alert>
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




const mapStateToProps = ({ tournamentFormsReducer,tournamentTeamsReducer }) => ({
    forms: tournamentFormsReducer,
    teams: tournamentTeamsReducer
    
});

const mapDispatchToProps = {
    fetchAllForms,
    fetchAllTeams   
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTournament);
