import React from "react";
// import {
//     Bracket,
//     // BracketGame,
//     // BracketGenerator,
//     // Model,
//     GameComponent
// } from "react-tournament-bracket";
import DEMO_DATA from "./demo-data";
import JSOG from "jsog";
import { fetchAllForms } from "../actions";
import { connect } from 'react-redux';
import TournementThumbnail from './TournamentThumbnail.js';





class ShowTournament extends React.Component {
    
    componentDidMount() {


        this.props.fetchAllForms();

    }

    state = {
        homeOnTopState: true,
        hoveredTeamId: null
    };

    get onGoingTournements() {
        const { forms } = this.props;
        return [forms];
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

    }
}




const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
 });
 
 const mapDispatchToProps = dispatch => ({
    fetchAllForms: () => dispatch(fetchAllForms()),
 });
 export default connect(
     mapStateToProps,
     mapDispatchToProps,
 )(ShowTournament);