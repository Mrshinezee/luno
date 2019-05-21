/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Text, View, Button, Image} from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}


