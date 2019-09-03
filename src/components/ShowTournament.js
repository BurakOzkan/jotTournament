import React, { PureComponent } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';
import TournamentThumbnail from './TournamentThumbnail.js';
import { Alert } from 'react-bootstrap';


// TODO :: Research what is PureComponent and its difference from the Component

class ShowTournament extends PureComponent {
    constructor(props) {
        super(props);

        this.handleTournamentClick = this.handleTournamentClick.bind(this);
    }

    componentDidMount() {
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
        const formID = e.target.dataset.formId;
        const { history, match } = this.props;
        history.push(`${match.path}/${formID}`);
    }

    render() {
        return (
            <div>
                <div>
                <Alert variant="dark">On Going Tournaments </Alert>
                    <div>
                        {
                            this.tournaments.onGoingTournaments.map(tournament => (
                                <TournamentThumbnail
                                    {...tournament}
                                    onClick={this.handleTournamentClick}
                                />
                            ))
                        }
                    </div>
                </div>
                <div>
                <br></br>
                <Alert variant="dark">Past Tournaments</Alert>
                    <div>
                        {
                            this.tournaments.pastTournaments.map(tournament => (
                                <TournamentThumbnail
                                    {...tournament}
                                    onClick={this.handleTournamentClick}
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
                            this.tournaments.futureTournaments.map(tournament => (
                                <TournamentThumbnail
                                    {...tournament}
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTournament);
