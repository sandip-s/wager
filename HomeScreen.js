import React, { Component } from 'react';

import {
  AppRegistry,
  FlatList,
  List,
  ListItem,
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
import Display from 'react-native-display'

//four users
import Adam from './Images/Adam.png'
import Charlie from './Images/Charlie.png'
import Sandip from './Images/Sandip.png'
import Zhiwei from './Images/Zhiwei.png'

//like and comment
import EmptyHeart from './Images/WagerLikeIcon.png'
import FullHeart from './Images/WagerUnLikeIcon.png'
import CommentButton from './Images/WagerCommentIcon.png'

var database = require('./global.js');
var wagers = require('./wagers.js');
var map = [false, false, false, false, false, false, false, false, false]

export default class HomeScreen extends React.Component {

  render() {

    return (

      <View style={{flex: 1, alignSelf: 'stretch'}}>
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'} }>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile() }>
              <Image source={database[1].image} style={styles.TopProfileIcon} />
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
          <Image style={{ height: 2000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
          <View style={styles.container}>
            <FlatList
              data={[
                {key: "Zhiwei failed Sandip's wager to try new juice cleanse by November 25th.", photo: "Zhiwei Gu", index: 3, timestamp: "2 hours ago", ID: 0},
                {key: "Charlie completed Sandip's wager to cook family dinner by November 24th.", photo: "Charlie Furrer", index: 0, timestamp: "18 hours ago", ID: 1},
                {key: "Charlie completed Zhiwei's wager to go a day without checking Instagram by November 24th.", photo: "Charlie Furrer", index: 0, timestamp: "18 hours ago", ID: 2},
                {key: "Charlie completed Zhiwei's wager to get lunch with a professor by November 21st.", photo: "Charlie Furrer", index: 0, timestamp: "4 days ago", ID: 3},
                {key: "Sandip failed Adam's wager to finish history paper draft by November 18th.", photo: "Sandip Srinivas", index: 2, timestamp: "7 days ago", ID: 4},
                {key: "Sandip completed Charlie's wager to go to the gym by November 17th.", photo: "Sandip Srinivas", index: 2, timestamp: "Nov 17", ID: 5},
                {key: "Sandip failed Zhiwei's wager to swim laps by November 16th.", photo: "Sandip Srinivas", index: 2, timestamp: "Nov 16", ID: 6},
                {key: "Zhiwei completed Charlie's wager to run a half marathon by November 15th.", photo: "Zhiwei Gu", index: 3, timestamp: "Nov 15", ID: 7},
                {key: "Zhiwei completed Adam's wager to read a new book by November 14th.", photo: "Zhiwei Gu", index: 3, timestamp: "Nov 14", ID: 8},
              ]}
            renderItem={({item}) =>
              <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(item.index,database,wagers) } style = {styles.FriendListEntry}>
                    <Image source = {database[item.index].image} style ={styles.WagerPhoto}/>
                  </TouchableWithoutFeedback>
                  <Text style={styles.item}>{item.key}</Text>
                </View>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
                <View style={{flexDirection: 'row', paddingLeft: 55}}>
                  <TouchableWithoutFeedback onPress = { () => {this.toggleHeart(item.ID)} }>
                    <Image source = {map[item.ID] ? FullHeart : EmptyHeart} style ={styles.LikeIcon}/>
                  </TouchableWithoutFeedback>

                  <Image source = {CommentButton} style ={styles.CommentIcon}/>
                </View>
              </View>
            }
            />
          </View>
        </ScrollView>

        {/* Bottom NavBar */}
        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Home Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome() }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomHighlightedIcon} />
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
    this.state = {
      enable: false
    }
  }

  toggleHeart(ID) {
    map[ID] = !map[ID];
    this.forceUpdate();
  }

  clickedProfile() {
    this.props.navigation.navigate('Profile', {user: database[1], person: database[1], wagers: wagers, database: database});
  };

  clickedSendWager() {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database});
  };

  clickedPending(){
    this.props.navigation.navigate('Pending', {user: database[1], wagers:wagers, database: database});
  };

  clickedActive(){
    this.props.navigation.navigate('Active', {user: database[1], wagers:wagers, database: database});
  };

  clickedExplore(){
    this.props.navigation.navigate('Explore', {user: database[1], wagers: wagers, database: database});
  };

  clickedHome(){

  };

  clickedFriendsListEntry(index,database,wagers){
    this.props.navigation.navigate('Profile', {user: database[1], person: database[index], wagers: wagers, database: database});
  };

}

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
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
    marginTop: 5,
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

  NavBarContainer: {
    backgroundColor: '#ffffff',
    height: 50
  },

  BottomIcon: {
    height: 30,
    width: 30,
    marginTop: 10
  },

  BottomHighlightedIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
    backgroundColor: '#D8F3DA'
  },

  container: {
   flex: 5,
   paddingTop: 10,
   paddingBottom: 10
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

  WagerPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5
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
