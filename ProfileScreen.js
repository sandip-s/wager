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
import LocationIcon from './Images/redpin.png'

// background
import Background from './Images/Background.png'

var isFriend = false;

export default class ProfileScreen extends React.Component {
  render() {
    var person = this.props.navigation.state.params.person;
    var profilePicture = this.choosePicture(person.fullName);
    isFriend = person.friends.includes(person.fullName);

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
        <View style={{ flex:1, backgroundColor: 'transparent' }}>
          <View>
            <Image style={{ height: 1000, width: '100%', position: 'absolute', top:0, left:0 }} source={Background} />
          </View>
          <ScrollView style={{ flex:1 }}>
            <View style={styles.header}>
              <Text style={styles.fullName}>{person.fullName}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={LocationIcon} style={styles.LocationIcon} />
                <Text style={styles.LocationText}>{person.location}</Text>
              </View>
              <Image source={profilePicture} style={styles.profilePicture} />
              <View style={{flexDirection: 'row'}}>
                <Button onPress = { () => this.friendButton(adam, person) } title={isFriend ? "✓ Friends" : "+ Add Friend"} color="#000000" />
                <Button onPress = { () => this.wagerFriendButton() } title={"Send Wager"} color="#000000" />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.grayRectangle} />
                <View style={{width: 200 * person.successRate, height: 20, backgroundColor: '#3BC446', borderRadius: 50, marginRight: 200 - 200 * person.successRate}} />
              </View>
            </View>
          </ScrollView>
        </View>

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

  clickedProfile(person) {
    //this.props.navigation.navigate('Profile', {person: this.props.navigation.state.params.person, wagers: this.props.navigation.state.params.wagers, database: this.props.navigation.state.params.database});
  };

  clickedSendWager() {
    this.props.navigation.navigate('NewWager', {wagers: this.props.navigation.state.params.wagers, database: this.props.navigation.state.params.database});
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

  friendButton(adam, person) {
    var index1 = adam.friends.indexOf(person.fullName);
    var index2 = person.friends.indexOf(adam.fullName);
    isFriend = !isFriend;
    if(index1 < 0) {
      adam.friends.push(person.fullName);
      person.friends.push(adam.fullName);
    } else {
      adam.friends.splice(index1, 1);
      person.friends.splice(index2, 1);
    }
    this.forceUpdate();
  };

  wagerFriendButton() {

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
    margin: 10
  },

  // location red pin
  LocationIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },

  LocationText: {
    fontSize: 20,
    fontFamily: 'Noteworthy',
    color: '#3BC446'
  },

  grayRectangle: {
    width: 200,
    height: 20,
    backgroundColor: '#BDC3C7',
    borderRadius: 50,
    position: 'absolute'
  }

});
