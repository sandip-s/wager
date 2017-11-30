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

// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'

export default class ProfileScreen extends React.Component {
  render() {
    var person = this.props.navigation.state.params.person;
    var profilePicture = this.choosePicture(person.fullName);

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
        <View style={{ flex:1, backgroundColor: 'transparent' }}>
          <View>
            <Image style={{ height: 1000, width: '100%', position: 'absolute', top:0, left:0 }} source={Background} />
          </View>
          <ScrollView style={{ flex:1 }}>
            <View style={styles.header}>
              <Text style={styles.fullName}>{person.fullName}</Text>
              <Image source={profilePicture} style={styles.profilePicture} />
            </View>
          </ScrollView>
        </View>
        {/* Bottom NavBar */}
      </View>
    );
  };

  clickedProfile() {
    Alert.alert('You clicked profile');
  };

  clickedSendWager() {
    Alert.alert('You clicked send wager!');
  };

  choosePicture(name) {
    switch(name) {
      case "Adam Mosharrafa":
        return require('./Images/Adam.png');
      case "Charlie Furrer":
        return require('./Images/Charlie.png');
      case "Sandip Srinivas":
        return require('./Images/Sandip.png');
      case "Zhiwei Gu":
        return require('./Images/Zhiwei.png');
    }
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

  // name and picture at top of profile
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // name at top of profile
  fullName: {
    fontSize: 40,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 20
  },

  // profile picture
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10
  }

});
