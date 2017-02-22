'use strict'

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/NewEmailNavBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NewEmailNavBar extends Component {
  // renders Nav Bar for the new email screen
  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewEmailNavBar;
