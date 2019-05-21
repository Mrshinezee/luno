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


export default class LinkScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Hamburger navigation={this.props.navigation}/>
        <Text style={styles.welcome}>Link</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12326b',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
});
