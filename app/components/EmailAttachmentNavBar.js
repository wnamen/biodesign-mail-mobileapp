'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import styles from '../styles/EmailAttachmentNavBar';

class EmailAttachmentNavBar extends Component {
  // renders the Nav Bar for the email attachment screen
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

export default EmailAttachmentNavBar;
