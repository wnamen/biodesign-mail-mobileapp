'use strict'

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import EmailAttachmentNavBar from '../components/EmailAttachmentNavBar';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailAttachmentScreen extends Component {
  constructor(props) {
    super(props)

  }

  render () {
    const image = (<View style={styles.imageContainer}><FaIcon name="picture-o" size={30} color='white' /></View>);

    return (
      <View style={{flex: 1}}>
        <EmailAttachmentNavBar navigator={this.props.navigator}/>
        <ScrollView>
          <Image
            style={{height: 500, width: 500}}
            source={require('../images/burgerweekimage.png')}
            />
        </ScrollView>
        <View>

        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({

});

export default EmailAttachmentScreen;
