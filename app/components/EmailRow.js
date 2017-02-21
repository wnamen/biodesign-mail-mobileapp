'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailRow extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FaIcon name="circle" size={18} color="white"/>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.75,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  emailContainer: {
    width: 270
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  subjectTextContainer: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: "#525253"
  },
  subjectTimeContainer: {
    textAlign: 'right',
    color: "#9ca4ab",
    fontSize: 12,
    fontWeight: '300'

  },
  text: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    color: '#525253',
    lineHeight: 20
  }
})

export default EmailRow;
