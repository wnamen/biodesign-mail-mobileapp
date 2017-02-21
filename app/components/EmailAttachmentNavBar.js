'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Navigator, StyleSheet } from 'react-native';

class EmailAttachmentNavBar extends Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.mailButton} onPress={() => this.props.navigator.pop()}>
          <Text style={styles.mailText}>Mail</Text>
        </TouchableOpacity>
        <Text style={styles.attachmentTitle}>burger-week-20...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  mailButton: {
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  mailText: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold'
  },
  attachmentTitle: {
    color: '#525253',
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: 55
  }

})

export default EmailAttachmentNavBar;
