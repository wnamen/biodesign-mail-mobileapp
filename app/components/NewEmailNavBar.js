'use strict'

import React, { Component } from 'react';
import { AlertIOS, PushNotificationIOS, View, TouchableOpacity, Text, StyleSheet, AppState } from 'react-native';
import styles from '../styles/NewEmailNavBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NewEmailNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: true
    }
    this.sendPasswordNotification = this.sendPasswordNotification.bind(this);
    this.onPasswordNotification = this.onPasswordNotification.bind(this);
  }

  componentWillMount = () => {
    PushNotificationIOS.addEventListener('localNotification', this.onPasswordNotification);
  }

  componentWillUnmount = () => {
    PushNotificationIOS.removeEventListener('localNotification', this.onPasswordNotification);
  }

  sendPasswordNotification = () => {
    require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
      aps: {
        alert: 'Your Password is required to send an email',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
  }

  onPasswordNotification = (notification) => {
    AlertIOS.prompt(
      'Enter password',
      'Your Password is required to send an email',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {
          this.setState({password: false})
          this.props.navigator.pop()
        }},
      ],
      'secure-text'
    );
  }

  // renders Nav Bar for the new email screen
  render = () => {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={this.sendPasswordNotification}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewEmailNavBar;
