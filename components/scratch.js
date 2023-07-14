import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

const handleCellClick = (index) => {
  if (board[index] || winner) {
    return;
  }

  const newBoard = [...board];
  newBoard[index] = currentPlayer;

  const newWinner = calculateWinner(newBoard);

  setBoard(newBoard);
  setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  setWinner(newWinner);

  // Check for draw
  const isDraw = newBoard.every((cell) => cell !== null);
  if (isDraw && !newWinner) {
    console.log('draw');
    // Display alert and reset the board
    Alert.alert('update','Draw',[{text: 'OK', onPress: () => console.log('OK Pressed')}])
    setBoard(Array(9).fill(null));
    setWinner(null);
  } else if (newWinner) {
    console.log('winner is', newWinner);  
    // Display alert and reset the board
    Alert.alert('update',`Winner: ${winner}`,[{text: 'OK', onPress: () => console.log('OK Pressed')}])
    setBoard(Array(9).fill(null));
    setWinner(null);
  }
};


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
      if (
        board[a] !== null &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        console.log('winner is', board[a]);
        return board[a];
      }
    }
    console.log('winner is undecided')
    return null;
  };

  const renderCell = (index) => {
    const cellValue = board[index];

    return (
      <TouchableOpacity
        onPress={() => handleCellClick(index)}
        key={index}
      >
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

