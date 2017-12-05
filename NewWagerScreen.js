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

import DatePicker from 'react-native-datepicker'

// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'

var sender = {fullName: 'Adam Mosharrafa', goal: '', reward: '', penalty: ''};
var receiver = {fullName: '', goal: '', reward: '', penalty: ''};

export default class NewWagerScreen extends React.Component {
  render() {
    var wagers = this.props.navigation.state.params.wagers;
    var database = this.props.navigation.state.params.database;

    return (
      <View style={{flex: 1, alignSelf: 'stretch', paddingTop: 20, backgroundColor: '#ffffff'}}>

        {/* Top NavBar */}
        <View style={styles.TopBar}>
          <View style={{flexDirection: 'row'}}>
            {/* Profile Icon */}

            <TouchableWithoutFeedback onPress = { () => this.clickedProfile() }>
              <Image source={ProfileIcon} style={styles.ProfileIcon} />
            </TouchableWithoutFeedback>
            {/* Wager Text */}
            <Text style={styles.Wager}>Wager</Text>
            {/* Send Wager Icon */}
            <TouchableWithoutFeedback onPress = { ()=> this.clickedSendWager() }>
              <Image source={SendWagerIcon} style={styles.SendWagerIcon} />
            </TouchableWithoutFeedback>
          </View>
        </View>

        {/* Middle */}
        <ScrollView>
          <Image style={{ height: 1000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
          <View style={styles.center}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deadline}>Deadline:</Text>
              <DatePicker
                style={styles.datepicker}
                date={this.state.date}
                mode="date"
                placeholder="Select Date"
                format="MM-DD-YYYY"
                minDate="01-01-2018"
                maxDate="12-31-2030"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 10
                  },
                  dateText: {
                    fontSize: 20,
                    fontFamily: 'Noteworthy',
                    color: 'black',
                    marginLeft: 20
                  },
                  placeholderText: {
                    fontSize: 20,
                    fontFamily: 'Noteworthy',
                    color: 'gray',
                    marginLeft: 20
                  }
                }}
                onDateChange={(date) => {this.setState({sender: sender, 
                                                        receiver: receiver, 
                                                        deadline: this.state.date, 
                                                        status: this.state.status, 
                                                        date: date})}}/>
            </View>
          </View>
          <View style={styles.center}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('./Images/Adam.png')} style={styles.profilePicture} />
              <Text style={styles.w}>W</Text>
              <Image source={ProfileIcon} style={styles.profilePicture} />
            </View>
          </View>
          <View style={styles.center}>
            <TouchableHighlight style={styles.button} onPress={this.sendWager}>
              <Text style={styles.buttonText}>Send Wager</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>

        {/* Bottom NavBar */}
        </View>
    );
  };

  constructor(props) {
    super(props)
    this.state = { sender: sender, receiver: receiver, status: 'Pending' }
  }

  sendWager = () => {
    if(this.state.date == null) {
      alert("You must enter a deadline.")
    } else {
      var wager = {sender: this.state.sender, receiver: this.state.receiver, deadline: this.state.date, status: this.state.status}
      this.props.navigation.state.params.wagers.push(wager);
      this.forceUpdate();
    }
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

  deadline: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 20,
    marginRight: 20
  },

  w: {
    backgroundColor: 'transparent',
    fontSize: 30,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 50
  },

  placeholder: {
    backgroundColor: 'transparent',
    fontSize: 23,
    fontFamily: 'Noteworthy',
    color: 'gray',
    marginTop: 20
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 25
  },

  button: {
    backgroundColor: '#3BC446',
    padding: 15,
    borderRadius: 15
  },

  buttonText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Noteworthy'
  },

  datepicker: {
    width: 170,
    marginTop: 20
  }

});
