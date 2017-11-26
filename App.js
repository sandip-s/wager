import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
  ScrollView,
  Image,
  Button,
  Alert,
  AppRegistry
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'

// home page
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import NewWagerScreen from './NewWagerScreen'


export default class App extends React.Component {
  render() {
    return (
        <Nav/>
    );
  };
}

const Nav = StackNavigator(
  {
    Home: {screen:HomeScreen},
    Profile: {screen: ProfileScreen},
    NewWager: {screen: NewWagerScreen},
  }
);
