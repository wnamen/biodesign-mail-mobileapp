'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import styles from '../styles/EmailRow';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailRow extends Component {

  // renders the row for each email within the email chain
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profilePicture}
          source={{uri: this.props.imageLink}}
        />
        <View style={styles.emailContainer}>
          <View style={styles.subjectContainer}>
            <Text style={styles.subjectTextContainer}>{ this.props.subjectText }</Text>
            <Text style={styles.subjectTimeContainer}>{ this.props.subjectTime }</Text>
          </View>
          <Text style={styles.text}>{ this.props.emailText }</Text>
        </View>
      </View>
    )
  }
}

export default EmailRow;
