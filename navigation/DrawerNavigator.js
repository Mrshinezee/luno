import React from "react";
import { Platform, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator} from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import LinkScreen from '../screens/LinkScreen';
import SettingScreen from '../screens/SettingScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
}


const DrawerNavigator = createDrawerNavigator(
    {
    Home: {
      screen: HomeScreen
    },
    Link: {
      screen: LinkScreen
    },
    Setting: {
      screen: SettingScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
