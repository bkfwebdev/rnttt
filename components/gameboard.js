import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';

export default class GameBoard extends Component {
    constructor() {
      super();
      this.state = { 
        uid: ''
      }  
    }

  TicTacToeBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleCellClick = (index) => {
    // Return early if the cell is already filled or the game is won
    if (board[index] || calculateWinner(board)) {
      return;
    }

    // Create a copy of the board and update the clicked cell with the current player's mark
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Update the board state and toggle the current player
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`;

  return (
    <div className="tic-tac-toe-board">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
    </div>
  );
};

// Helper function to calculate the winner
const calculateWinner = (board) => {
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

export default TicTacToeBoard;

}