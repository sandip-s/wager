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






export default class Active extends React.Component {


  render() {
    var database = this.props.navigation.state.params.database;
    var wagers = this.props.navigation.state.params.wagers;
    var active_wagers = this.activeWagers(wagers)

    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>
        
        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile(database,wagers) }>
              <Image source={ProfileIcon} style={styles.TopIcon} />
            </TouchableWithoutFeedback>
            {/* Wager Text */}
            <Text style={styles.Wager}>Wager</Text>
            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedSendWager(database,wagers) }>
              <Image source={SendWagerIcon} style={styles.TopIcon} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/*end top nav*/}

        <FlatList
          data = {active_wagers}
          renderItem = { ({item}) =>
            (
              <View style = {styles.PendingWager}>
                <Text>{item.sender.fullName}</Text>
                <Text>{item.sender.goal}</Text>
                <Text>{item.sender.reward}</Text>
                <Text>{item.sender.penalty}</Text>
              </View>
            )
          }
          keyExtractor={(item,index) => index}
        />

        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Profile Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome(database,wagers) }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedExplore(database,wagers) }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomIcon} />
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

  activeWagers(wagers){
    active = []
    for (i = 0; i < wagers.length; i++){
      if (wagers[i].status == "Active") active.push(wagers[i])
    }
    return active
  }

  clickedFriendsListEntry(index,database,wagers){
    this.props.navigation.navigate('Profile', {user: database[1], person: database[index], wagers: wagers, database: database});
  };

  clickedActiveWager(personClicked,database,wagers){
    this.props.navigation.navigate('NewWagerScreen', {person: database[1], wagers: wagers, database: database}); //currently sending them to newWagerScreen with adam profile
  }

  clickedProfile(database,wagers) {
    this.props.navigation.navigate('Profile', {user: database[1], person: database[1], wagers: wagers, database: database});
  };

  clickedSendWager(database,wagers) {
    this.props.navigation.navigate('NewWager', {wagers: wagers, database: database});
  };

  clickedPending(database,wagers){
    this.props.navigation.navigate('Pending', {user: database[1], wagers:wagers, database: database});
  };

  clickedActive(database,wagers){
    this.props.navigation.navigate('Active', {user: database[1], wagers:wagers, database: database});
  };

  clickedExplore(database,wagers){
    this.props.navigation.navigate('Explore',{user: database[1], wagers: wagers, database: database});
  };

  clickedHome(database,wagers){
    this.props.navigation.navigate('Home', {user: database[1], wagers: wagers, database: database});
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
