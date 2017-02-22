'use strict'

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import EmailAttachmentNavBar from '../components/EmailAttachmentNavBar';
import styles from '../styles/EmailAttachmentScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailAttachmentScreen extends Component {
  constructor(props) {
    super(props)
  }

  // renders email attachment screen
  render () {
    return (
      <View style={{flex: 1}}>
        <EmailAttachmentNavBar navigator={this.props.navigator}/>
        <ScrollView style={styles.imageContainer} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={styles.attachment}
                source={require('../images/burgerweekimage.png')}
                resizeMode='center'
                />
        </ScrollView>
        <View style={styles.tabBar}>
          <View style={styles.leftTab}>
            <TouchableOpacity style={styles.navButtons}><Icon name="chevron-left" size={35} color="#9ca4ab" /></TouchableOpacity>
            <TouchableOpacity style={styles.navButtons}><Icon name="chevron-right" size={35} color="#9ca4ab" /></TouchableOpacity>
            <TouchableOpacity style={styles.navButtons}><Icon name="replay" size={25} color='#525253' /></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.navButtons}><Icon name="file-download" size={25} color='#525253' /></TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default EmailAttachmentScreen;
