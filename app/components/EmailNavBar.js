'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class EmailNavBar extends Component {

  navigateToNewEmail = (screen) => {
    this.props.navigator.push({
      ident: "NewEmail",
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }

  render() {
    const download = (<TouchableOpacity style={styles.navButtons}><Icon name="file-download" size={25} color="#9ca4ab" /></TouchableOpacity>)
    const trash = (<TouchableOpacity style={styles.navButtons}><Icon name="delete" size={25} color="#9ca4ab" /></TouchableOpacity>)
    const more = (<TouchableOpacity style={styles.navButtons}><Icon name="keyboard-arrow-down" size={25} color="#9ca4ab" /></TouchableOpacity>)

    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.inboxButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.inboxText}>Inbox</Text>
        </TouchableOpacity>
        <View style={styles.navButtonContainer}>
          { download }
          { trash }
          { more }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navButtons: {
    paddingLeft: 20,
  },
  inboxButton: {
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  inboxText: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default EmailNavBar;
