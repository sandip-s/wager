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
  Navigator,
  FlatList
} from 'react-native';

// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'

export default class ExploreScreen extends React.Component {


  render() {
    var database = this.props.navigation.state.params.database;
    var wagers = this.props.navigation.state.params.wagers;
    var wager_array = this.props.navigation.state.params.wager_array;

    return (

      <View style={{flex: 1, alignSelf: 'stretch'}}>
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'} }>
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
        <ScrollView>
          <Image style={{ height: 2000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
          <Text style={styles.YouMightKnow}>{"You Might Know..."}</Text>

          <FlatList
            data = {[ database[0], database[2], database[3] ]}
            numColumns={3}
            renderItem = { ({item,}) =>
              (
              <View style={{flexDirection: 'column', paddingLeft: 55}}>
                <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(item, database, wagers, wager_array) } style = {styles.FriendListEntry}>
                  <Image source = {this.choosePicture(item.fullName)} style = {styles.FriendsListEntryElement}/>
                </TouchableWithoutFeedback>
                <Text style={styles.name}>{item.fullName.split(" ")[0]}</Text>
              </View>
              )
            }
            keyExtractor={(item,index) => index}
          />
        </ScrollView>

        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Profile Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome(database,wagers, wager_array) }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedExplore(database,wagers, wager_array) }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomHighlightedIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedPending(database,wagers, wager_array) }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedActive(database,wagers, wager_array) }>
              <Image source={require('./Images/WagerHourglassIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

          </View>
        </View>

      </View>
    );
  }

  clickedProfile(database, wagers, wager_array) {
    this.props.navigation.navigate('Profile', {user: database[1], person: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedSendWager(database, wagers, wager_array) {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedPending(database, wagers, wager_array){
    this.props.navigation.navigate('Pending', {user: database[1], wagers:wagers, database: database, wager_array: wager_array});
  };

  clickedActive(database, wagers, wager_array){
    this.props.navigation.navigate('Active', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedExplore(database, wagers, wager_array){

  };

  clickedHome(database, wagers, wager_array){
    this.props.navigation.navigate('Home', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
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
  }

  clickedFriendsListEntry(personClicked, database, wagers, wager_array){
    this.props.navigation.navigate('Profile', {user: database[1], person: personClicked, wagers: wagers, database: database, wager_array: wager_array});
  }


}


const styles = StyleSheet.create({
  // top bar
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
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

  TopIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
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

  name: {
    backgroundColor: 'transparent',
  },

  FriendsList: {

  },

  FriendsListEntry:{

  },

  FriendsListEntryElement:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  FriendsListEntryName:{

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

  YouMightKnow: {
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    textAlign: 'center',
    paddingBottom: 100
   },

});
