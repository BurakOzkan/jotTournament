import styled, { css } from "styled-components";
import React from "react";
import {Button} from 'react-bootstrap'

//i pass it props of css grid so that it the positions of the buttons can just be placed
//in their correct spot no matter the size of the bracket
let Competitor = styled.button`
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  grid-column-start: ${props => props.indexOfColumn};
  grid-row-start: ${props => props.indexOfRow};
  background-color: ${props => props.isClicked} ;
  margin: 7px;
  border: 2px solid #292929;
`;

//i made main a styled component. It also uses grid props for
//the different grids I used
const Main = styled.div`
  grid-template-columns: ${props => props.mainIndexOfColumn};
  grid-template-rows: ${props => props.mainIndexOfRow};
  background-color: #d1d1d1;
  display: grid;
  height: 100vh;
  text-align: center;
`;

let fakeEvent = {
  target: {
    value: "4"
  },
  key: "Enter"
};

class TournamentBrackets extends React.Component {

  
  componentDidMount() {
    this.handleChange(fakeEvent);


  }


  handleChange(e) {
    let newNum = "16";
    this.setState({
      numOfSeeds: newNum
    });

    if (newNum === "undefined") {
      this.setState({
        names: [],
        class: "",
        isClicked: []
      });
    }

    if (newNum === "4") {
      //depending on the seed, fills the arrays with the correct amount of buttons.
      this.setState({
        names: Array(6).fill(),
        class: "bracket4",
        isClicked: Array(6).fill("#535257")
      });
    }
    if (newNum === "8") {
      this.setState({
        names: Array(14).fill(),
        isClicked: Array(14).fill("#535257")
      });
    }
    if (newNum === "16") {
      this.setState({
        names: Array(30).fill(),
        isClicked: Array(30).fill("#535257")
      });
    }
  }






  listBrackets() {
    let bracketType = this.state.bracket4;
    if (this.state.numOfSeeds === "4") {
      bracketType = this.state.bracket4;
    }
    if (this.state.numOfSeeds === "8") {
      bracketType = this.state.bracket8;
    }
    if (this.state.numOfSeeds === "16") {
      bracketType = this.state.bracket16;
    }
    const bracketList = this.props.teams.map((text, key) => {
      return (
        <Competitor
          indexOfColumn={bracketType.column[key]}
          indexOfRow={bracketType.row[key]}
          key={key}
          isClicked={this.state.isClicked[key]}
          onClick={e => this.handleClickOfSeed(e, key, text)}
        >
          {text}
        </Competitor>
      );
    });
    return (
      <Main
        mainIndexOfColumn={bracketType.mainColumn}
        mainIndexOfRow={bracketType.mainRow}
      >
        {bracketList}{" "}
      </Main>
    );
  }

  //this has the grid properties for each bracket

  //match is used to decide where the button's text should move to next
  static getDerivedStateFromProps(np, ps) {
    if (np.teams !== ps.teams) {
      return {
        names: [...np.teams, Array(2).fill()]
      };
    }
    return {};
  }

  constructor(props) {
    super(props);
    const ln = props.teams.length;
    this.state = {
      numOfSeeds: "15",
      seedNum: Array(2).fill(),
      newName: "",
      names: Array(ln).fill(),
      isClicked: Array(ln + 7).fill("gray"),
      class: "bracket16",
      bracket4: {
        mainColumn: "30% 20% 20% 30%",
        column: [1, 1, 4, 4, 2, 3],
        row: [2, 4, 2, 4, 3, 3],
        match: [4, 4, 5, 5],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket8: {
        mainColumn: "20% 15% 15% 15% 15% 20%",
        column: [1, 1, 1, 1, 6, 6, 6, 6, 2, 2, 5, 5, 3, 4],
        row: [1, 2, 4, 5, 1, 2, 4, 5, 2, 4, 2, 4, 3, 3],
        match: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 12],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket16: {
        mainColumn: "12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%",
        column: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          8,
          2,
          2,
          2,
          2,
          7,
          7,
          7,
          7,
          3,
          3,
          6,
          6,
          4,
          5
        ],
        row: [
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11,
          2,
          4,
          8,
          10,
          2,
          4,
          8,
          10,
          3,
          9,
          3,
          9,
          6,
          6
        ],
        match: [
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          28,
          29
        ],
        mainRow: "9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9%"
      }
    };
  }

  handleClickOfSeed(e, key, text) {
    let arr = this.props.teams;
    let newArr = this.props.teams;
    let numBracket = this.state.numOfSeeds;
    let clickedArr = this.state.isClicked;
    if (text !== undefined) {
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "#66ff70" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key]; //this algorithm decides where the name should go once clicked.
        clickedArr[key] = "#66ff70";
        clickedArr[key + 1] = "#ff6666"; //uses key plus or minus one and also depends on the bracket size
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "#66ff70" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key];
        clickedArr[key] = "#66ff70";
        clickedArr[key - 1] = "#ff6666";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "#66ff70" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "#66ff70";
        clickedArr[key + 1] = "#ff6666";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "#66ff70" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "#66ff70";
        clickedArr[key - 1] = "#ff6666";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "#66ff70" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "#66ff70";
        clickedArr[key + 1] = "#ff6666";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "#66ff70" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "#66ff70";
        clickedArr[key - 1] = "#ff6666";
      }
    }
    this.setState({
      names: this.props.teams
    });
  }

  render() {
    return (
      <div className="bracketMaker">
        <div className="body">{this.listBrackets()}</div>
      </div>
    );
  }
}

export default TournamentBrackets;