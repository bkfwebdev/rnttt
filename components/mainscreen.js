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
        <View style={styles.mainScreenStyle}>
            <header style ={styles.headerStyle}><h1 style={styles.h1Style}>Tic Tac Toe</h1><button style={styles.buttonStyle}>Start game</button></header>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      padding: 35,
      backgroundColor: '#fff'
    },
    textStyle: {
      fontSize: 15,
      marginBottom: 20
    },
    mainScreenStyle :{
        textAlign: 'center',
        position: 'absolute',        
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%'
    },
    headerStyle: {
        position: 'relative',
        top: '50%',
        Webkittransform: 'translatey(-50%)',
        transform: 'translatey(-50%)'
    },
    h1Style: {
        fontFamily: "Montserrat , sans-serif",
        lineHeight: 0.7,
        margin: "0 auto",
        textAlign: "left",
        width: "1.875em"
    },
    buttonStyle: {
        margin:'2px',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
        display: 'inline-block',
        padding: '1.25em 3em',
        textDecoration: 'none',
        WebkitTransition: '0.25s ease',
        transition: '0.25s ease'
    }
  });