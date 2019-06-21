/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components';


const Container=styled.View`
    flex: 1,
    align-items: center,
    justify-content: center;
    background-color: #12326b,
`;


export default class HomeScreen extends Component{

  _signIn = () => {
    console.log('hello world');
  };

  render() {
    return (
       <View  style={styles.container}>
         <View style={styles.contentWrapper}>
            <Text style={styles.welcome}>Login</Text>
         </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12326b',
  },
  contentWrapper: {
    height: hp('80%'), // 70% of height device screen
    width: wp('90%'),  // 80% of width device screen
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
    color: 'white'
  },
});
