import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styled from 'styled-components';
import Text from './components/TextView';
import Card from './components/Card';


const SelectGameArea = styled.View`
    display: flex;
    flex-direction: column;
    flex:1;
    padding:30px 10px 10px 10px;
    width:  100%;
`;

const SelectGame = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    flex-wrap: wrap;
}
`;
const SelectItem = styled.Text`
    padding: 10px;
    margin: 5px;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    width: 90px;
    font-size: 10px;
    color: blue;
    background-color: #F4F8F9;
`;

const SelectGameTitle = styled.Text`
    padding-top: 10px;
`;

class CreateChallenge extends Component {
  render() {
    return (
    // <SafeAreaView>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'stretch',
      }}
        >
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
          <SelectGameTitle>
                Choose Game:
          </SelectGameTitle>
          <SelectGame>
            <Card game="FIFA" icon="trophy" />
            <Card game="DRAUGHT" icon="trophy" />
            <Card game="LUDO" icon="trophy" />
            <Card game="CARD" icon="trophy" />
            <Card game="CHESS" icon="trophy" />
          </SelectGame>
        </View>
          <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        </View>
      // </SafeAreaView>
    );
  }
}

export default CreateChallenge;
