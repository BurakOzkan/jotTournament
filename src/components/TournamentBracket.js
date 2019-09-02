import React, { PureComponent } from 'react';

// TODO :: render teams in bracket
// TODO :: find a way to keep the data of the tournament

export default class TournamentBracket extends PureComponent {
  get formID() {
    const { match } = this.props;
    return match.params.id;
  }

  render() {
    return (
      <div>
        {this.formID}
      </div>
    );
  }
}
