'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import styles from '../styles/InboxNavBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class InboxNavBar extends Component {

  navigateToNewEmail = () => {
    this.props.navigator.push({
      ident: "NewEmail",
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }

  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {this.props.handleDrawer()}}>
          <Icon name="menu" size={30} color="#525253" />
        </TouchableOpacity>
        <Text style={styles.navTextContainer}>Inbox</Text>
        <TouchableOpacity style={styles.pencilButton} onPress={this.navigateToNewEmail}>
          <Icon name="pencil" size={30} color="white"/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default InboxNavBar;
