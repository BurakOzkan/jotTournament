import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// TODO :: render teams in bracket
// TODO :: find a way to keep the data of the tournament

export  class TournamentBracket extends PureComponent {

  
  get formID() {
    const { match } = this.props;
    
    return match.params.id;
  }

  componentDidMount(){
    
    // console.log(this.props.tournaments)
    console.log(JSON.parse(JSON.stringify(this.props.tournaments[this.formID].teams)));

  }



  get teams() {
    if(this.props.tournaments[this.formID].teams){
    return this.props.tournaments[this.formID].teams
  }
  return null;
}
  
  // get teams(){
  //   const {forms} = this.props;
  //   return forms.
  // }

  render() {
    return (
      
      <div>
        
        {this.formID}
        {this.teams}
      </div>
    );

    
  }
}


const mapStateToProps = ({ tournamentFormsReducer }) => ({
  tournaments: tournamentFormsReducer
  
});

const mapDispatchToProps = {
  // fetchAllForms,
  // fetchAllTeams   
};

export default connect(
  mapStateToProps,
  null
)(TournamentBracket);
