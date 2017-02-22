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
        <Text style={styles.sectionTitles}>MAILBOXES</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionCotent}>Inbox</Text>
          <Text style={styles.sectionCotent}>Sent</Text>
          <Text style={styles.sectionCotent}>Pinned</Text>
          <Text style={styles.sectionCotent}>Drafts</Text>
          <Text style={styles.sectionCotent}>Trash</Text>
        </View>
        <Text style={styles.sectionTitles}>GROUPS</Text>
        <View>

        </View>
        <Text style={styles.sectionTitles}>MARKED</Text>
        <View>

        </View>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48464E'
  },
  sectionTitles: {
    color: '#c2c7d0',
    backgroundColor: '#504D57',
    padding: 15,
  },
  contentContainer: {
    padding: 15,
  },
  sectionCotent: {
    color: '#c2c7d0',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
    paddingBottom: 10
  },
  sectionContentIcon: {
    color: '#c2c7d0',
  }
})

export default MenuDrawer;
