import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  // fetchAllForms,
  // fetchAllTournamentSubmissions,
  fetchAllTeams
} from "../actions";
import TeamThumbnail from './TeamThumbnail';
import TournamentBrackets from './tournamentBrackets';
import ReactTournament from 'react-tournament';
import styled from 'styled-components'


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

  get dataArray() {
    const { teams } = this;
    const roundCount = Math.sqrt(teams.length);
    return Array.from({ length: roundCount }, (el, index) => {
      const sourceArray = index === 0 ? teams : Array.from({ length: roundCount - index + 1 });
      const round = [];
      let curPair = [];
      sourceArray.forEach((team, index) => {
        curPair.push({ user: team || '' });
        if ((index + 1) % 2 === 0) {
          round.push(curPair);
          curPair = [];
        }
      });
      return round;
    });
  }

  render() {
    return (
      <div>
        <TournamentBrackets teams={[...this.teams, Array(2).fill()]} />
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
