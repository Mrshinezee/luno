import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Hamburger from 'react-native-hamburger';
import { NavigationActions } from 'react-navigation'

export default class Hambuger extends Component {
    render() {
        console.log('checking', this.props.navigation);
        return (
            <View style={styles.hambugerIcon}>
                <Hamburger 
                onPress={() => this.props.navigation.toggleDrawer()}
                // onPress={() => this.props.navigation.navigate('DrawerToggle')} 
                color='white'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hambugerIcon: {
      zIndex: 9,
      position: 'absolute',
      top: 30,
      left: 20,
    },
  });