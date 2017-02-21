'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, Navigator, TouchableOpacity } from 'react-native';
import EmailNavBar from '../components/EmailNavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailScreen extends Component {
  constructor(props) {
    super(props)

  }

  render () {

    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <EmailNavBar navigator={this.props.navigator}/>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: "#fafafa"}}>

        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',

  },
  markerContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#1cbd9d',
  },
  emailContainer: {
    flexDirection: 'column',
    width: 300
  },
  subjectContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  subjectTextContainer: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 15,
    color: "#525253"
  },
  subjectTimeContainer: {
    flex: 1,
    textAlign: 'right',
    color: "#9ca4ab",
    fontSize: 12,

  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    color: '#525253'
  },
  subjectText2Container: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: "#525253"
  },
  subjectTime2Container: {
    flex: 1,
    textAlign: 'right',
    color: '#2A9FD8',
    fontSize: 12,

  },
  text2Container: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#525253'
  },
});

export default EmailScreen;
