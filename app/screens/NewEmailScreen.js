'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Navigator, TouchableOpacity, TextInput } from 'react-native';
import NewEmailNavBar from '../components/NewEmailNavBar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class NewEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <View>
        <NewEmailNavBar/>
        <TextInput
          style={{height: 40, width: 300}}
          placeholder='Search'
          color="#525253"
          fontSize={15}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',

  },
});

export default NewEmailScreen;
