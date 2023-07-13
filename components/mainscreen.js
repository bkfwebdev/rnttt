import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';

export default class MainScreen extends Component {
    constructor() {
      super();
      this.state = { 
        uid: ''
      }
    }

    render() {
      this.state = { 
        displayName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid
      }    
      return (
        <View>
            <header ><h1>Tic Tac Toe</h1><button onPress={() => this.props.navigation.navigate('GameBoard')}>Start game</button></header>
        </View>
      );
    }
  }
  
