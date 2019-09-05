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
  constructor(props) {
    super(props);
    this.updateLocal = this.updateLocal.bind(this);
    this.state = { useLocal: false };
  }



  get formID() {
    const { match } = this.props;
    return match.params.id;
  }

  componentDidMount(){
    this.props.fetchAllTeams(this.formID);
    const x = window.localStorage.getItem(`bracket_${this.formID}`);
    if (x) {
      try {
        console.log('found', JSON.parse(x));
        this.setState({ useLocal: true });
      } catch (e) {
        console.log('hoppa');
      }
    }
  }

  get teams(){
    const { tournament } = this.props;
    if (this.state.useLocal) {
      const data = window.localStorage.getItem(`bracket_${this.formID}`);
      try {
        return JSON.parse(data);
      } catch (e) {
        //
      }
    }
    return tournament && Array.isArray(tournament.teams) ? [...tournament.teams, ...Array(14).fill()] || [] : [];
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

  updateLocal(arr) {
    window.localStorage.setItem(`bracket_${this.formID}`, JSON.stringify(arr));
  }

  resetLocalStorage() {
    // TODO :: Put a reset button for the tournament and delete the data in the local storage
  }

  render() {
    return (
      <div>
        <TournamentBrackets
          teams={this.teams}
          updateLocal={this.updateLocal}
        />
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
