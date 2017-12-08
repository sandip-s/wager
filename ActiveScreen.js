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
    var active_wagers = this.activeWagers(wagers);
    var wager_array = this.props.navigation.state.params.wager_array;

    return (
      <View style={{flex: 1, alignSelf: 'stretch',}}>

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
        {/*end top nav*/}

        <ScrollView>
          <Image style={{ height: 2000, width: '100%', position: 'absolute', marginTop:0}} source={Background} />


        <View style = {{marginTop:10}}>
        <FlatList

          data = {active_wagers}
          renderItem = { ({item}) =>
            (
              <View style={{flexDirection: 'column', flexWrap: 'wrap',}}>
                <View style={styles.WagerBanner}>
                  <TouchableWithoutFeedback onPress = { () => this.clickedWagerBanner(item,database,wagers, wager_array) }>
                    <Image source= {this.isSender(item)? item.receiver.image: item.sender.image} style={styles.profilePicture} />
                  </TouchableWithoutFeedback>
                  <View style= {{flexDirection: 'column',flexWrap: 'wrap', width: 300,paddingTop: 10,justifyContent: 'center'}}>
                    <Text style = {styles.TransparentText}>You have an active wager with {this.isSender(item) ? item.receiver.fullName : item.sender.fullName    }!</Text>
                    <Text style = {styles.TransparentText}>Make sure to complete your goal of: {this.isSender(item) ? item.sender.goal: item.receiver.goal}.</Text>
                    <Text style={styles.timestamp}> Deadline: {item.deadline}</Text>
                  </View>
                </View>

              </View>
            )
          }
          keyExtractor={(item,index) => index}
        />
        </View>

        </ScrollView>


        <View style={styles.NavBarContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            {/* Profile Icon */}
            <TouchableWithoutFeedback onPress = { () => this.clickedHome(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerHomeIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedExplore(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerSearchIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedPending(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerPendingIcon.png')} style={styles.BottomIcon} />
            </TouchableWithoutFeedback>

            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedActive(database, wagers, wager_array) }>
              <Image source={require('./Images/WagerHourglassIcon.png')} style={styles.BottomHighlightedIcon} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }


  clickedWagerBanner(current_wager, database, wagers, wager_array){

  };

  isSender(wager){
    return wager.direction == "Sent"
  }

  activeWagers(wagers){
    active = []
    for (i = 0; i < wagers.length; i++){
      if (wagers[i].status == "Active") active.push(wagers[i])
    }
    return active
  }

  clickedFriendsListEntry(index, database, wagers, wager_array){
    this.props.navigation.navigate('Profile', {user: database[1], person: database[index], wagers: wagers, database: database, wager_array: wager_array});
  };

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

  };

  clickedExplore(database,wagers, wager_array){
    this.props.navigation.navigate('Explore',{user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

  clickedHome(database,wagers, wager_array){
    this.props.navigation.navigate('Home', {user: database[1], wagers: wagers, database: database, wager_array: wager_array});
  };

}

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  TransparentText:{
    backgroundColor: 'transparent'
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

  WagerBanner:{
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: .5,
    margin: 10,
    backgroundColor: 'white'
  },



  BottomIcon: {
    height: 30,
    width: 30,
    marginTop: 10
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

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    marginBottom: 10
  },

  timestamp: {
    fontFamily: 'Verdana',
    backgroundColor: 'transparent',
    fontStyle: 'italic',
    padding: 10,
    fontSize: 12,
    height: 44,
    marginLeft: 55,
    backgroundColor: 'transparent'
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
