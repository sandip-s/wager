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

var view_sent = false;

export default class PendingScreen extends React.Component {

  render() {
    var database = this.props.navigation.state.params.database;
    var wagers = this.props.navigation.state.params.wagers;
    var pending_wagers = this.pendingWagers(wagers);
    var sent_wagers = this.filterPending(pending_wagers,"Sent");
    var recieved_wagers = this.filterPending(pending_wagers, "Received");
    var display_wagers = view_sent ? sent_wagers: recieved_wagers;

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

      {/*The buttons for filtering sent/recieved */}
      <View style = {{justifyContent: 'center',alignItems: 'center'}} >
        <View style = {styles.FilterButtonContainer}>
          <TouchableWithoutFeedback onPress = { () => this.flipDisplay("sent") } style = {styles.ButtonContainer}>
            <View><Text style = {styles.Button}>Sent</Text></View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress = { () => this.flipDisplay("received") } style = {styles.ButtonContainer} >
            <View><Text style = {styles.Button}>Received</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      
      <FlatList
        data = {display_wagers}
        renderItem = { ({item}) =>
          (
            <View style = {styles.WagerBanner}>
              <TouchableWithoutFeedback onPress = { () => this.clickedWagerBanner(item,database,wagers) }>
                <Image source= {view_sent? item.receiver.image: item.sender.image} style={styles.profilePicture} />
              </TouchableWithoutFeedback>
              <View style = {styles.PendingWager}>
                <Text>{view_sent? "Sent ": ""}New Wager {view_sent ? "to": "from"} {view_sent? item.receiver.fullName: item.sender.fullName}!</Text>
              </View>
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


  flipDisplay(str){
    if ((str == "sent" && !view_sent) || (str == "received" && view_sent)){
      view_sent = !view_sent
      this.forceUpdate();
    }
  }

  pendingWagers(wagers){
    pending = []
    for (i = 0; i < wagers.length; i++){
      if (wagers[i].status == "Pending") pending.push(wagers[i])
    }
    return pending
  }

  filterPending(pending,filterString){
    filtered = []
    for (i = 0; i < pending.length; i++){
      if (pending[i].direction == filterString) filtered.push(pending[i])
    }
    return filtered
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

  };

  clickedActive(database,wagers){
    this.props.navigation.navigate('Active', {user: database[1], wagers: wagers, database: database});
  };

  clickedExplore(database,wagers){
    this.props.navigation.navigate('Explore',{user: database[1], wagers: wagers, database: database});
  };

  clickedHome(database,wagers){
    this.props.navigation.navigate('Home');
  };

}

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  Button: {
    backgroundColor: '#3BC446',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    color: '#ffffff',
    margin: 20,
    padding: 10
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

  FilterButtonContainer: {
    flexDirection: 'row',
  },

  NavBarContainer: {
    backgroundColor: '#ffffff',
    height: 50
  },

  ButtonContainer:{
    borderRadius: 20,
  },

  WagerBanner:{
    flexDirection: 'row'
  },

  BottomIcon: {
    height: 30,
    width: 30,
    marginTop: 10
  },

  FilterButton: {
    backgroundColor: '#3BC446',
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 5,
  },

  container: {
   flex: 5,
   paddingTop: 10,
   paddingBottom: 10
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    marginBottom: 10
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
