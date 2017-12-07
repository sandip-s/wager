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
    var active_wagers = activeWagers(wagers)

    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>
      <FlatList
        data = {active_wagers}
        renderItem = { ({item}) =>
          (
          <TouchableWithoutFeedback onPress = { () => this.clickedFriendsListEntry(item) } style = {styles.FriendListEntry}>
            <Image source = {database[database.indexOf(item)].image} style = {styles.FriendsListEntryElement}/>
          </TouchableWithoutFeedback>
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

  activeWagers(wagers){
    active = []
    for (i = 0; i < wagers.length; i++){
      if (wagers[i].status == "Pending") active.push(wagers[i])
    }
    return active
  }

  clickedActiveWager(personClicked,data){
    this.props.navigation.navigate('NewWagerScreen', {person: database[1], wagers: wagers, database: database}); //currently sending them to newWagerScreen with adam profile
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
  }

});
