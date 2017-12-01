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

const database = require('./global.js');


export default class HomeScreen extends React.Component {

  render() {

    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile() }>
              <Image source={ProfileIcon} style={styles.ProfileIcon} />
            </TouchableWithoutFeedback>
            {/* Wager Text */}
            <Text style={styles.Wager}>Wager</Text>
            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedSendWager() }>
              <Image source={SendWagerIcon} style={styles.SendWagerIcon} />
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
            <Image source={require('./Images/WagerHomeIcon.png')} style={styles.NavBarIcon} />
          </TouchableWithoutFeedback>

          {/* Send Wager Icon */}
          <TouchableWithoutFeedback onPress = { ()=> this.clickedExplore() }>
            <Image source={require('./Images/WagerSearchIcon.png')} style={styles.NavBarIcon} />
          </TouchableWithoutFeedback>

          {/* Send Wager Icon */}
          <TouchableWithoutFeedback onPress = { ()=> this.clickedPending() }>
            <Image source={require('./Images/WagerBellIcon.png')} style={styles.NavBarIcon} />
          </TouchableWithoutFeedback>

          {/* Send Wager Icon */}
          <TouchableWithoutFeedback onPress = { ()=> this.clickedActive() }>
            <Image source={require('./Images/WagerCommentIcon.png')} style={styles.NavBarIcon} />
          </TouchableWithoutFeedback>


        </View>
      </View>
      </View>
    );
  };

  clickedProfile() {
    this.props.navigation.navigate('Profile', {person: database.adam, adam: database.adam});
  };

  clickedSendWager() {
    this.props.navigation.navigate('NewWager');
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
    this.props.navigation.navigate('Explore');
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
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    textAlign: 'center',
    marginLeft: 110,
    marginRight: 110
  },

  // send wager icon
  SendWagerIcon: {
    marginTop: 5
  },

  // profile icon
  ProfileIcon: {
    marginTop: 5
  },

  NavBarIcon: {
    height: 25,
    width: 25
  }

});
