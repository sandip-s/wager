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
  Navigator
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';



// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'
import ProfileScreen from './ProfileScreen'
import NewWagerScreen from './NewWagerScreen'

var database = require('./global.js');
var wagers = require('./wagers.js');
var adam_index = 1

export default class HomeScreen extends React.Component {

  render() {

    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile() }>
              <Image source={ProfileIcon} style={styles.TopIcon} />
            </TouchableWithoutFeedback>
            {/* Wager Text */}
            <Text style={styles.Wager}>Wager</Text>
            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedSendWager() }>
              <Image source={SendWagerIcon} style={styles.TopIcon} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        {/* Middle */}
        <ScrollView>
          <Image style={{ height: 1000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
        </ScrollView>

        {/* Bottom NavBar */}
        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row'}}>

            {/* Profile Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome() }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedExplore() }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedPending() }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedActive() }>
              <Image source={require('./Images/WagerHourglassIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

          </View>
        </View>
      </View>
    );
  };

  clickedProfile() {
    this.props.navigation.navigate('Profile', {user: database[adam_index], person: database[adam_index], wagers: wagers, database: database});
  };

  clickedSendWager() {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database});
  };

  clickedPending(){
    //this.props.rootNavigation.navigation.navigate('Pending');
    this.props.navigation.navigate('Home');
  };

  clickedActive(){
    //this.props.rootNavigation.navigation.navigate('Active');
    this.props.navigation.navigate('Home');
  };

  clickedExplore(){
    this.props.navigation.navigate('Explore',{user: database[adam_index], wagers: wagers, database: database});
  };

  clickedHome(){
    this.props.navigation.navigate('Home');
  };
}


const styles = StyleSheet.create({
  // top bar
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  // wager text
  Wager: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    textAlign: 'center',
    marginLeft: 110,
    marginRight: 110
  },

  // send wager icon
  TopIcon: {
    width: 30,
    height: 30,
    marginTop: 5
  },

  NavBarContainer: {
    backgroundColor: '#ffffff',
    height: 50
  },

  BottomIcon: {
    height: 30,
    width: 30,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
