'use strict'

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class MenuDrawer extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray'
  }
})

export default MenuDrawer;
