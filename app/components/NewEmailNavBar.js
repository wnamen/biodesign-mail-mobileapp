'use strict'

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/NewEmailNavBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NewEmailNavBar extends Component {

  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={() => this.props.navigator.pop()}>
          <Text style={{color: '#525253', fontSize: 12, fontWeight: 'bold'}}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={() => this.props.navigator.pop()}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Send</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewEmailNavBar;
