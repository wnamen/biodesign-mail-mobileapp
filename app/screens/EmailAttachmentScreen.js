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

  render () {
    const download = (<TouchableOpacity style={styles.navButtons}><Icon name="file-download" size={25} color='#525253' /></TouchableOpacity>)
    const replay = (<TouchableOpacity style={styles.navButtons}><Icon name="replay" size={25} color='#525253' /></TouchableOpacity>)
    const chevronLeft = (<TouchableOpacity style={styles.navButtons}><Icon name="chevron-left" size={35} color="#9ca4ab" /></TouchableOpacity>)
    const chevronRight = (<TouchableOpacity style={styles.navButtons}><Icon name="chevron-right" size={35} color="#9ca4ab" /></TouchableOpacity>)

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
            { chevronLeft }
            { chevronRight }
            { replay }
          </View>

          { download }
        </View>
      </View>
    )
  }
}

export default EmailAttachmentScreen;
