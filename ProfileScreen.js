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

// profile images
import AdamImg from './Images/Adam.png'
import CharlieImg from './Images/Charlie.png'
import SandipImg from './Images/Sandip.png'
import ZhiweiImg from './Images/Zhiwei.png'
var profilePicture;

export default class ProfileScreen extends React.Component {
  render() {
    var person = this.props.navigation.state.params.person;
    this.choosePicture(person.fullName);

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
        profilePicture = AdamImg;
        break;
      case "Charlie Furrer":
        profilePicture = AdamImg;
        break;
      case "Sandip Srinivas":
        profilePicture = AdamImg;
        break;
      case "Zhiwei Gu":
        profilePicture = ZhiweiImg;
        break;
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

  fullName: {
    fontSize: 40,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 20
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10
  }

});
