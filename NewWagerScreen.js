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
  KeyboardAvoidingView
} from 'react-native';

import DatePicker from 'react-native-datepicker'
import SearchBar from 'react-native-elements'
import Display from 'react-native-display';

// top bar icons
import SendWagerIcon from './Images/SendWagerIcon.png'
import ProfileIcon from './Images/ProfileIcon.png'

// background
import Background from './Images/Background.png'

// icons
import Target from './Images/goalIcon.png'
import Reward from './Images/rewardIcon.png'
import Skull from './Images/penaltyIcon.png'
import Thumb from './Images/WagerThumbIcon.png'
import CounterIcon from './Images/WagerCounterIcon.png'

var clickCount = 0;

export default class NewWagerScreen extends React.Component {
  render() {

    var wagers = this.props.navigation.state.params.wagers;
    var database = this.props.navigation.state.params.database;
    var current_wager = this.props.navigation.state.params.current_wager;
    var pending = Boolean(current_wager);
    var countered = Boolean(this.props.navigation.state.params.countered);
    var canEdit = countered || !pending;
    var user = null;
    var person = null;
    if(pending) {
      var user = current_wager.direction == 'Received' ? current_wager.receiver : current_wager.sender;
      var person = current_wager.direction == 'Received' ? current_wager.sender : current_wager.receiver;
    }
    var profilePicture = pending ? person.image : (clickCount == 0 ? ProfileIcon : database[clickCount % 4].image);


    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <ScrollView>
          <Image style={{ height: 2000, width: '100%', position: 'absolute', top:-200, left:0 }} source={Background} />
          <View style={styles.center}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.deadline}>Deadline:</Text>
              <DatePicker
                disabled={!canEdit}
                style={styles.datepicker}
                date={this.state.deadline}
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
                onDateChange={(date) => {this.setState({deadline: date,
                                        myGoal: this.state.myGoal,
                                        myReward: this.state.myReward,
                                        myPenalty: this.state.myPenalty,
                                        yourGoal: this.state.yourGoal,
                                        yourReward: this.state.yourReward,
                                        yourPenalty: this.state.yourPenalty,
                                        enable: this.state.enable
                                      })}}/>
            </View>
          </View>

          <View style={styles.center}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.center}>
                  <Image source={database[1].image} style={styles.profilePicture} />
                  <Text style={styles.fullName}>Adam Mosharrafa</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Target} style={styles.headerIcon} />
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.myGoal : null} placeholder="Enter a goal" onChangeText={(myGoal) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: myGoal,
                                    myReward: this.state.myReward,
                                    myPenalty: this.state.myPenalty,
                                    yourGoal: this.state.yourGoal,
                                    yourReward: this.state.yourReward,
                                    yourPenalty: this.state.yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Reward} style={styles.headerIcon} />
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.myReward : null} placeholder="Enter a reward" onChangeText={(myReward) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: this.state.myGoal,
                                    myReward: myReward,
                                    myPenalty: this.state.myPenalty,
                                    yourGoal: this.state.yourGoal,
                                    yourReward: this.state.yourReward,
                                    yourPenalty: this.state.yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={Skull} style={styles.headerIcon} />
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.myPenalty : null} placeholder="Enter a penalty" onChangeText={(myPenalty) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: this.state.myGoal,
                                    myReward: this.state.myReward,
                                    myPenalty: myPenalty,
                                    yourGoal: this.state.yourGoal,
                                    yourReward: this.state.yourReward,
                                    yourPenalty: this.state.yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                  </View>
                </View>
              </View>
              <Text style={styles.w}>W</Text>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.center}>
                  <TouchableWithoutFeedback disabled={!canEdit} onPress = { () => this.updateClickCount(canEdit) }>
                    <Image source={profilePicture} style={styles.profilePicture} />
                  </TouchableWithoutFeedback>
                  <Text style={styles.fullName}>{pending ? person.fullName : this.getReceiverName()}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.yourGoal : null} placeholder="Enter a goal" onChangeText={(yourGoal) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: this.state.myGoal,
                                    myReward: this.state.myReward,
                                    myPenalty: this.state.myPenalty,
                                    yourGoal: yourGoal,
                                    yourReward: this.state.yourReward,
                                    yourPenalty: this.state.yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                    <Image source={Target} style={styles.headerIcon} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.yourReward : null} placeholder="Enter a reward" onChangeText={(yourReward) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: this.state.myGoal,
                                    myReward: this.state.myReward,
                                    myPenalty: this.state.myPenalty,
                                    yourGoal: this.state.yourGoal,
                                    yourReward: yourReward,
                                    yourPenalty: this.state.yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                    <Image source={Reward} style={styles.headerIcon} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput editable={canEdit} style={styles.placeholder} value={pending ? this.state.yourPenalty : null} placeholder="Enter a penalty" onChangeText={(yourPenalty) =>
                      this.setState({deadline: this.state.deadline,
                                    myGoal: this.state.myGoal,
                                    myReward: this.state.myReward,
                                    myPenalty: this.state.myPenalty,
                                    yourGoal: this.state.yourGoal,
                                    yourReward: this.state.yourReward,
                                    yourPenalty: yourPenalty,
                                    enable: this.state.enable
                                  })}/>
                    <Image source={Skull} style={styles.headerIcon} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Display enable={!pending || canEdit}>
            <View style={styles.center}>
              <TouchableWithoutFeedback style={styles.button} onPress={this.sendWager}>
                <View><Text style={styles.buttonText}>Send Wager!</Text></View>
              </TouchableWithoutFeedback>
            </View>
          </Display>
          <Display enable={pending && !canEdit}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.redCircle}>
                <TouchableWithoutFeedback onPress={this.rejectWager}>
                  <Image source={Thumb} style={styles.RejectThumb} />
                </TouchableWithoutFeedback>
              </View>
                <View style={styles.yellowCircle}>
                <TouchableWithoutFeedback onPress={ () => this.counterWager(current_wager, database, wagers)}>
                  <Image source={CounterIcon} style={styles.CounterIcon} />
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.greenCircle}>
                <TouchableWithoutFeedback onPress={this.acceptWager}>
                  <Image source={Thumb} style={styles.AcceptThumb} />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </Display>
          <View style={styles.center}>
            <Button onPress={this.toggleDisplay.bind(this)} title="Show/Hide Wagers" color="#34495e"/>
            <Display enable={this.state.enable}>
              <Text>{JSON.stringify(wagers, null, 4)}</Text>
            </Display>
          </View>
        </ScrollView>
      </View>
    );
  };

  constructor(props) {
    super(props);
    this.state = {}

    var current_wager = this.props.navigation.state.params.current_wager;
    var pending = Boolean(current_wager);
    if(pending) {
      var user = current_wager.direction == 'Received' ? current_wager.receiver : current_wager.sender;
      var person = current_wager.direction == 'Received' ? current_wager.sender : current_wager.receiver;
      this.state = {
        deadline: current_wager.deadline,
        myGoal: user.goal,
        myReward: user.reward,
        myPenalty: user.penalty,
        yourGoal: person.goal,
        yourReward: person.reward,
        yourPenalty: person.penalty,
        enable: false
      }
    }
  }

  toggleDisplay() {
    this.setState({
      deadline: this.state.deadline,
      myGoal: this.state.myGoal,
      myReward: this.state.myReward,
      myPenalty: this.state.myPenalty,
      yourGoal: this.state.yourGoal,
      yourReward: this.state.yourReward,
      yourPenalty: this.state.yourPenalty,
      enable: !this.state.enable
    });
    this.forceUpdate();
  }

  sendWager = () => {
    var countered = Boolean(this.props.navigation.state.params.countered);
    if(this.state.deadline == null) {
      alert("You must enter a deadline.");
    } else if(this.getReceiverName() == 'Tap to choose!' && !countered) {
      alert("You must choose a friend to wager.");
    } else if (this.state.myGoal == null || this.state.yourGoal == null) {
      alert("You must enter a goal for both people.");
    } else if (this.state.myReward == null || this.state.yourReward == null) {
      alert("You must enter a reward for both people.");
    } else if (this.state.myPenalty == null || this.state.yourPenalty == null) {
      alert("You must enter a penalty for both people.");
    } else {
      var sender = {fullName: 'Adam Mosharrafa', goal: this.state.myGoal, reward: this.state.myReward, penalty: this.state.myPenalty, image: require('./Images/Adam.png')};
      var receiver = {fullName: this.getReceiverName(), goal: this.state.yourGoal, reward: this.state.yourReward, penalty: this.state.yourPenalty, image: this.props.navigation.state.params.database[clickCount % 4].image};
      var newWager = {sender: sender,
                   receiver: receiver,
                   deadline: this.state.deadline,
                   status: 'Pending',
                   direction: 'Sent'
                  }
      var current_wager = this.props.navigation.state.params.current_wager;
      var pending = Boolean(current_wager);
      if(pending) this.props.navigation.state.params.wagers.splice(this.props.navigation.state.params.wagers.indexOf(current_wager), 1);
      this.props.navigation.state.params.wagers.push(newWager);
      clickCount = 0;
      this.forceUpdate();
    }
  }

  // remove wager from array and navigate to pending wagers
  rejectWager() {

  }

  // need to make clicking send wager after this edit current wager instead of creating new one in array
  // then navigate to pending wagers when clicking send wager
  counterWager(current_wager, database, wagers) {
    this.props.navigation.navigate('NewWager', { current_wager: current_wager, database: database, wagers: wagers, user: database[1], countered: true})
  }

  // mark wager.status active and navigate to active wagers
  acceptWager() {
    
  }

  updateClickCount(canEdit) {
    if(canEdit) {
      clickCount++;
      if(clickCount % 4 == 1) clickCount++; // skip over adam
      this.forceUpdate();
    }
  }

  getReceiverName() {
    var countered = Boolean(this.props.navigation.state.params.countered);
    if(countered) {
      var current_wager = this.props.navigation.state.params.current_wager;
      var person = current_wager.direction == 'Received' ? current_wager.sender : current_wager.receiver;
      return person.fullName;
    } 
    if(clickCount == 0) return 'Tap to choose!';
    return this.props.navigation.state.params.database[clickCount % 4].fullName;
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
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    textAlign: 'center',
    marginLeft: 110,
    marginRight: 110
  },

  // send wager icon
  TopIcon: {
    width: 30,
    height: 30,
    marginTop: 5
  },

  NavBarContainer: {
    height: 50
  },

  BottomIcon: {
    height: 30,
    width: 30,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 14,
    fontFamily: 'Noteworthy',
    color: 'gray',
    width: 90,
    margin: 10
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 25,
    marginBottom: 0
  },

  button: {
    backgroundColor: '#3BC446',
    padding: 20,
    borderRadius: 15,
    marginTop: 25
  },

  buttonText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Noteworthy'
  },

  datepicker: {
    width: 170,
    marginTop: 20
  },

  headerIcon: {
    width: 40,
    height: 40,
    margin: 10
  },

  fullName: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontFamily: 'Noteworthy',
    color: '#3BC446',
    marginTop: 5,
    marginBottom: 25
  },

  keyboard: {

  },

  RejectThumb: {
    width: 60,
    height: 60,
    transform: [{ rotate: '180deg'}],
    marginTop: 10,
    marginLeft: 5
  },

  redCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
    marginTop: 40
  },

  CounterIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10
  },

  yellowCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'yellow',
    marginTop: 40
  },

  AcceptThumb: {
    width: 60,
    height: 60,
    marginTop: 5,
    marginLeft: 5
  },

  greenCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#3bc446',
    marginTop: 40
  }

});
