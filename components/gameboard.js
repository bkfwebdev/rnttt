import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
const {default: xImage } = await import('./resources/x.svg')
const {default: oImage } = await import('./resources/o.svg')
const xImageUri = Image.resolveAssetSource(xImage).uri
const oImageUri = Image.resolveAssetSource(oImage).uri

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      uid: '',
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    };
  }

  handleCellClick = (index) => {
    const { board, currentPlayer, winner } = this.state;

    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const newWinner = this.calculateWinner(newBoard);

    this.setState({
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner: newWinner,
    });
  };

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

  renderCell = (index) => {
    const { board } = this.state;
    const cellValue = board[index];
    let backgroundImage;

    if (cellValue === 'X') {
      backgroundImage = xImageUri;
    } else if (cellValue === 'O') {
      backgroundImage = oImageUri;
    }

    return (
      <div
        style={styles.cellStyle}
        onPress={() => this.handleCellClick(index)}
      >
        {backgroundImage && (
          <ImageBackground
            source={backgroundImage}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        )}
      </div>
    );
  };

  renderWinnerMessage = () => {
    const { winner } = this.state;

    if (winner) {
      return <Text style={styles.winnerMessage}>{`Winner: ${winner}`}</Text>;
    }

    return null;
  };

  render() {
    const { board } = this.state;

    return (
      <View style={styles.container}>
        {this.renderWinnerMessage()}
        {board.map((cell, index) => this.renderCell(index))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    margin: 'auto'
  },
  cellStyle: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2986cc',
  },
  winnerMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GameBoard;

