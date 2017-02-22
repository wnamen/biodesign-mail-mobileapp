'use strict'

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import styles from '../styles/CustomStatusBar';

class CustomStatusBar extends Component {
  // renders black status bar with white icons
  render() {
    return (
      <View style={styles.statusBarBackground}>
        <StatusBar barStyle="light-content" />
      </View>
    )
  }
}

export default CustomStatusBar;
