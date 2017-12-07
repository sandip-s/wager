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
      <Text style={styles.YouMightKnow}>{"You Might Know..."}</Text>
      <FlatList
        data = {[ database[0], database[2], database[3] ]}
        numColumns={3}
        renderItem = { ({item,}) =>
          (
          <View style={{flexDirection: 'column', paddingLeft: 55}}>
            <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(item,database,wagers) } style = {styles.FriendListEntry}>
              <Image source = {this.choosePicture(item.fullName)} style = {styles.FriendsListEntryElement}/>
            </TouchableWithoutFeedback>
            <Text style={styles.name}>{item.fullName.split(" ")[0]}</Text>
          </View>
          )
        }
        keyExtractor={(item,index) => index}
      />

          <ScrollView style = {styles.FriendsList}>
              <View style = {{flexDirection: 'row'}}>
            </View>
        </ScrollView>
      </View>

    );
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
  }


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
