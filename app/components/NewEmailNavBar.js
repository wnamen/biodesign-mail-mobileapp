'use strict'

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NewEmailNavBar extends Component {

  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={{color: '#525253', fontSize: 12, fontWeight: 'bold'}}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>Send</Text>
        </TouchableOpacity>
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
  closeButton: {
    backgroundColor: "white",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  sendButton: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderColor: 'black',
    borderRadius: 3,
    shadowColor: 'gray',
  }
})

export default NewEmailNavBar;
