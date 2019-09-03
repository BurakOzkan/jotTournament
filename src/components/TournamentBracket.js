import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  // fetchAllForms,
  // fetchAllTournamentSubmissions,
  fetchAllTeams
} from "../actions";

// TODO :: render teams in bracket
// TODO :: find a way to keep the data of the tournament

export  class TournamentBracket extends PureComponent {
  get formID() {
    const { match } = this.props;
    return match.params.id;
  }

  componentDidMount(){
    this.props.fetchAllTeams(this.formID);
  }

  // get teams() {
  //   if(this.props.tournaments[this.formID].teams){
  //     return this.props.tournaments[this.formID].teams
  //   }
  //   return null;
  // }
  
  get teams(){
    const { tournament } = this.props;
    return tournament ? tournament.teams || [] : [];
  }

  render() {
    return (
      <div>
        {this.formID}
        {this.teams}
      </div>
    );
  }
}


const mapStateToProps = ({ tournamentFormsReducer }, { match }) => {
  const formID = match.params.id;
  return {
    tournament: tournamentFormsReducer[formID]
  };
}

const mapDispatchToProps = {
  // fetchAllForms,
  fetchAllTeams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentBracket);
