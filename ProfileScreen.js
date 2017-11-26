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



export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>

        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <Text> Navigated to Profile! </Text>
        </View>

        {/* Middle */}
        <ScrollView>
          <Image style={{ height: 1000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
        </ScrollView>

        {/* Bottom NavBar */}
        </View>
    );
  };

  clickedProfile() {
    Alert.alert('You clicked profile');
  };

  clickedSendWager() {
    Alert.alert('You clicked send wager!');
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
