'use strict'

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class MenuDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ScrollView style={styles.container}>

        <Text style={styles.sectionTitles}>MAILBOXES</Text>
        <View style={styles.contentContainer}>
          <View style={styles.contentSelectedRowContainer}>
            <Icon name="move-to-inbox" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Inbox</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="near-me" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Sent</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="place" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Pinned</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="description" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Drafts</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="delete" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Trash</Text>
          </View>
        </View>

        <Text style={styles.sectionTitles}>GROUPS</Text>
        <View style={styles.groupTopContainer}>
          <View style={styles.contentRowContainer}>
            <Icon name="panorama-fish-eye" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>All Mail</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="panorama-fish-eye" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Spam</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.contentRowContainer}>
            <Icon name="panorama-fish-eye" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Project Foo</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="panorama-fish-eye" size={25} color='#c2c7d0' />
            <Text style={styles.sectionContent}>Project Bar</Text>
          </View>
        </View>

        <Text style={styles.sectionTitles}>MARKED</Text>
        <View style={styles.contentContainer}>
          <View style={styles.contentRowContainer}>
            <Icon name="stop" size={25} color='coral' />
            <Text style={styles.sectionContent}>Important</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="stop" size={25} color='skyblue' />
            <Text style={styles.sectionContent}>Personal</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="stop" size={25} color='limegreen' />
            <Text style={styles.sectionContent}>Work</Text>
          </View>
          <View style={styles.contentRowContainer}>
            <Icon name="stop" size={25} color='gold' />
            <Text style={styles.sectionContent}>Travel</Text>
          </View>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: '600'
  },
  contentContainer: {
    paddingBottom: 10,
  },
  contentRowContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15

  },
  contentSelectedRowContainer: {
    flexDirection: 'row',
    backgroundColor: '#1d79ec',
    paddingVertical: 8,
    paddingHorizontal: 15

  },
  sectionContent: {
    color: '#c2c7d0',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  groupTopContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#504D57',
  }
})

export default MenuDrawer;
