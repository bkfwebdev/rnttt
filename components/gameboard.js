import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    if (currentPlayer === 'O' && !winner && !gameEnded) {
      makeComputerMove();
    }
  }, [currentPlayer, winner, gameEnded]);

  const handleCellClick = (index) => {
    if (board[index] || winner || gameEnded) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

    const newWinner = calculateWinner(newBoard);
    setWinner(newWinner);

    if (newWinner) {
      setGameEnded(true);
    } else if (!newBoard.includes(null)) {
      setGameEnded(true);
    }
  };

  const makeComputerMove = () => {
    const computerMove = getComputerMove(board);
    if (computerMove !== null) {
      setTimeout(() => {
        handleCellClick(computerMove);
      }, 500); // Delay computer move for visual effect
    }
  };

  const getComputerMove = (board) => {
    const emptyCells = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        emptyCells.push(i);
      }
    }

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      return emptyCells[randomIndex];
    }

    return null;
  };

  const calculateWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // First column
      [1, 4, 7], // Second column
      [2, 5, 8], // Third column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  useEffect(() => {
    if (gameEnded) {
      if (winner) {
        setTimeout(() => {
          alert(`Winner: ${winner}`);
          resetGame();
        }, 500); // Delay winner alert for visual effect
      } else {
        setTimeout(() => {
          alert('Draw');
          resetGame();
        }, 500); // Delay draw alert for visual effect
      }
    }
  }, [gameEnded, winner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameEnded(false);
  };

  const renderCell = (index) => {
    const cellValue = board[index];

    return (
      <TouchableOpacity key={index} onPress={() => handleCellClick(index)}>
        <Text style={styles.cellStyle}>{cellValue}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {board.map((_, index) => renderCell(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    margin: 'auto',
  },
  cellStyle: {
    width: 90,
    height: 90,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2986cc',
    fontFamily: 'Impact',
    fontSize: 70,
    color: '#fff',
    padding: 'auto',
    textAlign: 'center',
  },
});

export default GameBoard;
