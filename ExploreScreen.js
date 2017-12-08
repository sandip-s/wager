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



    return (


      <View style={{flex: 1, justifyContent: 'space-around', alignSelf: 'stretch', paddingTop: 20,  backgroundColor: '#ffffff'}}>

      <Image style={{ height: 2000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
      <Text style={styles.YouMightKnow}>{"You Might Know..."}</Text>



      <FlatList
        data = {[ database[0], database[2], database[3] ]}
        renderItem = { ({item,}) =>
          (
          <View style={{flexDirection: 'column', alignItems: 'center', paddingBottom: 10}}>
            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(item,database,wagers) } style = {styles.FriendListEntry}>
              <Image source = {item.image} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>
            <Text style={styles.name}>{item.fullName.split(" ")[0]}</Text>
            <Text style={styles.name}>{item.location}</Text>
          </View>
          )
        }
        keyExtractor={(item,index) => index}
      />

          <ScrollView style = {styles.FriendsList}>
              <View style = {{flexDirection: 'row'}}>
            </View>
        </ScrollView>
        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Profile Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome(database,wagers) }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedExplore(database,wagers) }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomHighlightedIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedPending(database,wagers) }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedActive(database,wagers) }>
              <Image source={require('./Images/WagerHourglassIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

          </View>
        </View>

      </View>

    );
  }

  clickedActiveWager(personClicked, data){
    this.props.navigation.navigate('NewWagerScreen', {person: database[1], wagers: wagers, database: database});
  }

  clickedProfile(database, wagers) {
    this.props.navigation.navigate('Profile', {user: database[1], person: database[1], wagers: wagers, database: database});
  };

  clickedWagerBanner(current_wager, database, wagers){
    this.props.navigation.navigate('NewWager', { current_wager: current_wager, database: database, wagers: wagers, user: database[1], countered: false})
  };

  clickedSendWager(database, wagers) {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database});
  };

  clickedPending(database,wagers){
    this.props.navigation.navigate('Pending', {user: database[1], wagers:wagers, database: database});
  };

  clickedActive(database,wagers){
    this.props.navigation.navigate('Active', {user: database[1], wagers: wagers, database: database});
  };

  clickedExplore(database,wagers){

  };

  clickedHome(database,wagers){
    this.props.navigation.navigate('Home');
  };

  clickedFriendsListEntry(personClicked,database,wagers){
    this.props.navigation.navigate('Profile', {user: database[1], person: personClicked, wagers: wagers, database: database});
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
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
  },

  FriendsList: {

  },

  FriendsListEntry:{

  },

  FriendsListEntryElement:{
    width: 100,
    height: 100,
    borderRadius: 50,
    paddingBottom: 5
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
    paddingBottom: 20
   },

});
