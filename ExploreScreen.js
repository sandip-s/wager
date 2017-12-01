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

var database = require('./global.js');



export default class ExploreScreen extends React.Component {

  /*
  const peopleList = database.map((person) =>
    <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(person) } style = {styles.FriendListEntry}>
      <Image source = {require(person.photo)} style = {styles.FriendsListEntryElement}/>
      <Text> {database.fullName} </Text>
    </TouchableWithoutFeedback>
  );
  */

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>

        {/* Middle */}
        <View style = {{flexDirection: 'column'}}>


          <ScrollView style = {styles.FriendsList}>
            
            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(database.charlie) } style = {styles.FriendListEntry}>
              <Image source = {this.choosePicture(database.charlie.fullName)} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(database.adam) } style = {styles.FriendListEntry}>
              <Image source = {this.choosePicture(database.adam.fullName)} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(database.sandip) } style = {styles.FriendListEntry}>
              <Image source = {this.choosePicture(database.sandip.fullName)} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(database.zhiwei) } style = {styles.FriendListEntry}>
              <Image source = {this.choosePicture(database.zhiwei.fullName)} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>

          </ScrollView>
        </View>
      </View>
        
    );
  }


  clickedFriendsListEntry(personClicked){
    this.props.navigation.navigate('Profile', {person: personClicked, adam: database.adam});
  }

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


}


const styles = StyleSheet.create({
  // top bar
  TopBar: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  FriendsList: {
    flexDirection: 'column',
  },

  FriendsListEntry:{
    flexDirection: 'row',
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
  }

});
