'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, Navigator, TouchableOpacity } from 'react-native';

import EmailNavBar from '../components/EmailNavBar';
import EmailRow from '../components/EmailRow';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailScreen extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    const image = (<View style={styles.imageContainer}><FaIcon name="picture-o" size={30} color='white' /></View>)

    return (
      <View style={{flex: 1}}>
        <EmailNavBar navigator={this.props.navigator}/>
        <View style={styles.emailTitle}>
          <Text style={styles.title}>We should grab some dinner tonight.</Text>
        </View>

        <EmailRow
          subjectText={'Matt Vickers'}
          subjectTime={'14:39'}
          emailText={'How do you feel about grabbing a burger tonight? I know a great place.'}
          />

        <EmailRow
          subjectText={'Billy Kiely'}
          subjectTime={'8:14'}
          emailText={'Is it that place that Jon was talking about earlier today?'}
          />

        <View style={styles.attachmentTitleContainer}>
          <Text style={styles.attachmentTitle}>1 Attachment</Text>
        </View>

        <View style={styles.attachmentContainer}>
          { image }
          <Text style={styles.attachmentText}>burger-week-2013.jpg</Text>
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  emailTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: "#525253",
    fontWeight: 'bold'
  },
  attachmentTitleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  attachmentTitle: {
    color: "#525253",
    fontSize: 12,
    fontWeight: '300'
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 7,
    paddingVertical: 9,
    borderRadius: 2,
  },
  attachmentText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1E90FF',
    textAlign: 'left',
    paddingLeft: 15
  }
});

export default EmailScreen;
