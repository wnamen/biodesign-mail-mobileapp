
'use strict'

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

class CustomStatusBar extends Component {

  render() {
    return (
      <View style={styles.statusBarBackground}>
        <StatusBar
          barStyle="light-content" />
      </View>
    )
  }

}

const styles = StyleSheet.create({

  statusBarBackground: {
    height: 20,
    backgroundColor: "black"
  }

})

export default CustomStatusBar;
