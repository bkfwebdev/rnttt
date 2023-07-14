import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase';

class GameBoard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: '',
      board: Array(9).fill(null),
      currentPlayer: "X"
    }  
  }

  calculateWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  
    return null;
  };

  handleCellClick = (index) => {
    // Return early if the cell is already filled or the game is won
    if (this.state.board[index] || this.calculateWinner(this.state.board)) {
      return;
    }

    // Create a copy of the board and update the clicked cell with the current player's mark
    const newBoard = [...this.state.board];
    newBoard[index] = this.state.currentPlayer;

    // Update the board state and toggle the current player
    this.setState({
      board: newBoard,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    });
  };

  renderCell = (index) => {
    return (
      <div key = {index} style = {styles.cellStyle} onClick={() => this.handleCellClick(index)}>
        {this.state.board[index]}
      </div>
    );
  };

  render() {
    const theWinner = this.calculateWinner(this.state.board);
    const gameStatus = theWinner ? `Winner: ${theWinner}` : `Current Player: ${this.state.currentPlayer}`;

    return (

        <View style = {styles.cellsContainer}>
          {this.state.board.map((cell, index) => this.renderCell(index))}
        </View>

    );
  }
}

export default GameBoard;

const styles = StyleSheet.create({
  cellsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 300, // Set a fixed width for the container
    height: 300, // Set a fixed height for the container
  },
  cellStyle: {
    width: 90, // Adjust the width of each cell as needed
    height: 90, // Adjust the height of each cell as needed
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "#2986cc",
  },
});
