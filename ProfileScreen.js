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

import Display from 'react-native-display';

export default class ProfileScreen extends React.Component {
  render() {
    var person = this.props.navigation.state.params.person;
    var user = this.props.navigation.state.params.user;
    var database = this.props.navigation.state.params.database;
    var profilePicture = database[database.indexOf(person)].image;

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
              <Display enable={user != person}>
                <View style={{flexDirection: 'row'}}>
                  <Button onPress = { () => this.friendButton(user, person) } title={this.state.isFriend ? "✓ Friends" : "+ Add Friend"} color="#000000" />
                  <Button onPress = { () => this.wagerFriendButton() } title={"Send Wager"} color="#000000" />
                </View>
              </Display>
              <View style={{alignItems: 'center'}}>
                <View style={styles.grayRectangle} />
                <View style={{width: 200 * person.successRate, height: 20, backgroundColor: '#3BC446', borderRadius: 50, marginRight: 200 - 200 * person.successRate}} />
                <Text style={styles.progressText}>{person.successRate * 100}%</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Bottom NavBar */}
        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Home Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome() }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Explore Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedExplore() }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Pending Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedPending() }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Active Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedActive() }>
              <Image source={require('./Images/WagerHourglassIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

          </View>
        </View>
      </View>
    );
  };

  constructor(props) {
    super(props);
    var person = this.props.navigation.state.params.person;
    var user = this.props.navigation.state.params.user;
    this.state = {
      isFriend: user.friends.includes(person.fullName)
    }
  }

  clickedProfile(person) {

  };

  clickedSendWager() {
    this.props.navigation.navigate('NewWager', {wagers: this.props.navigation.state.params.wagers, database: this.props.navigation.state.params.database});
  };

  friendButton(adam, person) {
    console.log(adam)
    var index1 = adam.friends.indexOf(person.fullName);
    var index2 = person.friends.indexOf(adam.fullName);
    this.state.isFriend = !this.state.isFriend;
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
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

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
    marginTop: 10
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  fullName: {
    fontSize: 40,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 20
  },

  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10
  },

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
  },

  progressText: {
    fontSize: 12,
    fontFamily: 'Noteworthy',
    color: '#3BC446'
  }

});
