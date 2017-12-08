import React from 'react';

import {
  StyleSheet,
  FlatList,
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

//like and comment
import EmptyHeart from './Images/WagerLikeIcon.png'
import FullHeart from './Images/WagerUnLikeIcon.png'
import CommentButton from './Images/WagerCommentIcon.png'

var adam_wagers = [
    {key: "Adam completed Zhiwei's wager to do laundry by November 23rd.", timestamp: "2 days ago", ID: 0},
    {key: "Adam completed Sandip's wager to run 3 miles by November 22nd.", timestamp: "3 days ago", ID: 1},
    {key: "Adam failed Sandip's wager to call brothers and parents by November 22nd.", timestamp: "3 days ago", ID: 2},
]

var charlie_wagers = [
    {key: "Charlie completed Sandip's wager to cook family dinner by November 24th.", timestamp: "18 hours ago", ID: 0},
    {key: "Charlie completed Zhiwei's wager to go a day without checking Instagram by November 24th.", timestamp: "18 hours ago", ID: 1},
    {key: "Charlie completed Zhiwei's wager to get lunch with a professor by November 21st.", timestamp: "4 days ago", ID: 2},
]

var sandip_wagers = [
    {key: "Sandip failed Adam's wager to finish history paper draft by November 18th.", timestamp: "7 days ago", ID: 0},
    {key: "Sandip completed Charlie's wager to go to the gym by November 17th.", timestamp: "Nov 17", ID: 1},
    {key: "Sandip failed Zhiwei's wager to swim laps by November 16th.", timestamp: "Nov 16", ID: 2},
]

var zhiwei_wagers = [
    {key: "Zhiwei failed Sandip's wager to try new juice cleanse by November 25th.", timestamp: "2 hours ago", ID: 0},
    {key: "Zhiwei completed Charlie's wager to run a half marathon by November 15th.", timestamp: "Nov 15", ID: 1},
    {key: "Zhiwei completed Adam's wager to read a new book by November 14th.", timestamp: "Nov 14", ID: 2},
]

export default class ProfileScreen extends React.Component {
  render() {
    var person = this.props.navigation.state.params.person;
    var user = this.props.navigation.state.params.user;
    var database = this.props.navigation.state.params.database;
    var profilePicture = database[database.indexOf(person)].image;
    var person_index = this.getIndex(person.fullName);
    var wager_array = this.props.navigation.state.params.wager_array;
    var wagers = this.props.navigation.state.params.wagers;

    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile(database, wagers, wager_array) }>
              <Image source={database[1].image} style={styles.TopProfileIcon} />
            </TouchableWithoutFeedback>
            {/* Wager Text */}
            <Text style={styles.Wager}>Wager</Text>
            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedSendWager(database, wagers, wager_array) }>
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
                </View>
              </Display>
              <View style={{alignItems: 'center'}}>
                <View style={styles.grayRectangle} />
                <View style={{width: 200 * person.successRate, height: 20, backgroundColor: '#3BC446', borderRadius: 50, marginRight: 200 - 200 * person.successRate}} />
                <Text style={styles.progressText}>{person.successRate * 100}% of Wagers Completed</Text>
              </View>

              <FlatList
              data={this.getWagers(person.fullName, this.state.isFriend)}
              renderItem={({item}) =>
              <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.item}>{item.key}</Text>
                </View>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
                <View style={{flexDirection: 'row', paddingLeft: 55}}>
                  <TouchableWithoutFeedback onPress = { () => {this.toggleHeart(person_index, item.ID, wager_array)} }>
                    <Image source = {wager_array[person_index][item.ID] ? FullHeart : EmptyHeart} style ={styles.LikeIcon}/>
                  </TouchableWithoutFeedback>

                  <Image source = {CommentButton} style ={styles.CommentIcon}/>
                </View>
              </View>
              }
              />

            </View>
          </ScrollView>
        </View>

        {/* Bottom NavBar */}
        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Home Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Explore Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedExplore(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Pending Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedPending(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Active Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedActive(database, wagers, wager_array) }>
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
      isFriend: user.friends.includes(person.fullName),
    }
  };

  toggleHeart(index, ID, wager_array) {
    wager_array[index][ID] = !wager_array[index][ID];
    this.forceUpdate();
  };

  getIndex(fullName) {
    switch(fullName) {
      case "Charlie Furrer":          
        return 0;
      case "Adam Mosharrafa":          
        return 1;
      case "Sandip Srinivas":
        return 2;
      case "Zhiwei Gu":
        return 3;
    }
  };

  clickedProfile(database, wagers, wager_array) {

  };

  clickedSendWager(database, wagers, wager_array) {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedPending(database, wagers, wager_array){
    this.props.navigation.navigate('Pending', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedActive(database, wagers, wager_array){
    this.props.navigation.navigate('Active', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedExplore(database, wagers, wager_array){
    this.props.navigation.navigate('Explore',{user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedHome(database, wagers, wager_array){
    this.props.navigation.navigate('Home', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
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

  getWagers(fullName, isFriend) {
    if (fullName == "Adam Mosharrafa") {return adam_wagers;}
    if (!isFriend) {return []};
    switch(fullName) {
      case "Charlie Furrer":
        return charlie_wagers;
      case "Sandip Srinivas":
        return sandip_wagers;
      case "Zhiwei Gu":
        return zhiwei_wagers;
    }
  }
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

  TopProfileIcon:{
    width: 36,
    height: 36,
    marginTop: 5,
    borderRadius: 18,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3bc446',
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
    margin: 10,
    borderWidth: 1,
    borderColor: '#3bc446',
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
    fontSize: 14,
    fontFamily: 'Noteworthy',
    color: '#3BC446'
  },

  item: {
    fontFamily: 'Verdana',
    backgroundColor: 'transparent',
    flexWrap: 'wrap',
    width: 325,
    padding: 10,
    fontSize: 12,
    height: 44,
  },

  timestamp: {
    fontFamily: 'Verdana',
    backgroundColor: 'transparent',
    fontStyle: 'italic',
    padding: 10,
    fontSize: 12,
    height: 44,
    marginLeft: 55
  },

  LikeIcon: {
    width: 30,
    height: 30
  },

  CommentIcon: {
    width: 30,
    height: 30,
    marginLeft: 25
  }

});
