'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import styles from '../styles/EmailNavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

class EmailNavBar extends Component {

  // navigates to the New Email Screen
  navigateToNewEmail = (screen) => {
    this.props.navigator.push({
      ident: "NewEmail",
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }

  // renders Nav Bar for the Email Screen
  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.inboxButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.inboxText}>Inbox</Text>
        </TouchableOpacity>
        <View style={styles.navButtonContainer}>
        <TouchableOpacity style={styles.navButtons}><Icon name="file-download" size={25} color="#9ca4ab" /></TouchableOpacity>
        <TouchableOpacity style={styles.navButtons}><Icon name="delete" size={25} color="#9ca4ab" /></TouchableOpacity>
        <TouchableOpacity style={styles.navButtons}><Icon name="keyboard-arrow-down" size={25} color="#9ca4ab" /></TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default EmailNavBar;
