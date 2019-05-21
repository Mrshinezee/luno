/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Hamburger from '../components/Hambuger';



export default class HomeScreen extends Component{
  render() {
    return (
       <View  style={styles.home}>
         <Hamburger navigation={this.props.navigation}/>
        <Text style={styles.welcome}>Welcome to Luno wallet</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12326b',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
});
