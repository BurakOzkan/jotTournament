import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  // fetchAllForms,
  // fetchAllTournamentSubmissions,
  fetchAllTeams
} from "../actions";
import TeamThumbnail from './TeamThumbnail';
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

  render() {
    const theme ={
      primary: {
        default: '#757585',
        dark: '#1565c0',
        darkest: '#002171',
        light: '#bbdefb',
      },
      success: {
        default: '#81c784',
        dark: '#388e3c',
        darkest: '#003300',
        light: '#c8e6c9',
      },
      fail: {
        default: '#e57373',
        dark: '#c62828',
        darkest: '#7f0000',
        light: '#ffcdd2',
      },
      textSmall: '11px',
      textMedium: '16px',
      textLarge: '22px',
    
      textDark: '#000000',
      textLight: '#ffffff',
    };
    const  data = [
      // 1st round
      [
        // 1st pair
        [
          // 1st person
          {
            user: 'yankouskia',
            userLink: 'https://github.com/yankouskia',
            score: 87,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
            isWinner: true,
          },
          // 2nd person
          {
            user: 'Alex',
            userLink: 'https://github.com/yankouskia',
            score: 32,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
          }
        ],
        // 2nd pair
        [
          // 3rd person
          {
            user: 'yankouskia',
            userLink: 'https://github.com/yankouskia',
            score: 56,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
            isWinner: true,
          },
          // 4th person
          {
            user: 'Alex',
            userLink: 'https://github.com/yankouskia',
            score: 54,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
          }
        ]
      ],
      // 2nd round
      [
        // 1st pair
        [
          // 1st person
          {
            user: 'yankouskia',
            userLink: 'https://github.com/yankouskia',
            score: 34,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
          },
          // 2nd person
          {
            user: 'Alex',
            userLink: 'https://github.com/yankouskia',
            score: 98,
            scoreLink: 'https://github.com/yankouskia/react-tournament',
          }
        ]
      ],
    ];
    return (
      <div>
          <ReactTournament
    aspectRatio="1"
    data={data}
    theme={theme}
    width="%50"
  />

        { 
          this.teams.map((item, index) => <TeamThumbnail team={item} key={index} />)
        }  
          <p><br></br>
            {Array((this.teams.length)/2).fill(<TeamThumbnail />)}
          </p>
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
