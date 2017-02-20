'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class InboxNavBar extends Component {

  render() {
    const drawer = (<View style={styles.drawerButton}><Icon name="menu" size={30} color="#525253" /></View>)
    const pencil = (<View style={styles.pencilButton}><Icon name="pencil" size={30} color="white"/></View>)

    return (
      <View style={styles.navContainer}>
        {drawer}
        <Text style={styles.navTextContainer}>Inbox</Text>
        {pencil}
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
  navTextContainer: {
    fontSize: 20,
    fontWeight: '500',
    color: '#525253'
  },
  drawerButton: {
    backgroundColor: "white",
    paddingHorizontal: 13,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  pencilButton: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 13,
    borderColor: 'black',
    borderRadius: 5,
    shadowColor: 'gray',
  }
})

export default InboxNavBar;