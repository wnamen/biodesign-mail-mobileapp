'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Navigator, TouchableOpacity, TextInput } from 'react-native';
import InboxNavBar from '../components/InboxNavBar';
import MenuDrawer from '../components/MenuDrawer';
import styles from '../styles/EmailListScreen';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

var data = require('../staticData');

class EmailListScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id != r2.id})
    this.state = {
      dataSource: ds.cloneWithRows(data),
      showDelete: false,
      openDrawer: false,
      iconColor: '#9ca4ab'
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.navigateToEmail = this.navigateToEmail.bind(this);
  }

  // navigates to the Email View screen
  navigateToEmail = () => {
    this.props.navigator.push({ ident: 'EmailView' })
  }

  // handles drawer view
  handleDrawer = () => {
    this.setState({openDrawer: !this.state.openDrawer})
  }

  // handles delete button
  handleDeleteButton = () => {
    this.setState({
      showDelete: !this.state.showDelete
    })
  }

  // renders the Email List Screen
  render () {
    return (
      <Drawer
        type="displace"
        content={<MenuDrawer />}
        open={this.state.openDrawer}
        tapToClose={true}
        onClose={()=> this.setState({openDrawer: false})}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3} >
        <View style={{flex: 1}}>
          <InboxNavBar navigator={this.props.navigator} handleDrawer={this.handleDrawer}/>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: "#fafafa"}}>
            <Icon name="search" size={18} color={this.state.iconColor} />
            <TextInput
              style={{height: 40, width: 300}}
              placeholder='Search'
              color="#525253"
              fontSize={15}
              onFocus={(e) => this.setState({iconColor: '#2A9FD8'})}
              onBlur={(e) => this.setState({iconColor: '#9ca4ab'})}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              />
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderEmailRow.bind(this)} />
        </View>
      </Drawer>

    )
  }

  renderEmailRow(email) {
    const attachment = (<FaIcon name="paperclip" size={15} color="#525253" />)

    if (email.time === '14:39') {
      return (
        <TouchableOpacity style={styles.container} onPress={this.navigateToEmail}>
          <FaIcon name="circle" size={18} color="#1cbd9d"/>
          <View style={styles.emailContainer}>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectText2Container}>{email.from}</Text>
              <Text style={styles.subjectTime2Container}>{attachment} {email.time}</Text>
            </View>
            <Text style={styles.text2Container}>{email.subject}</Text>
            <Text style={styles.textContainer}>{email.text}</Text>
          </View>
        </TouchableOpacity>
      )
    } else if (email.time === '8:14') {
      return (
        <TouchableOpacity style={styles.container} onPress={this.handleDeleteButton}>
          <FaIcon name="circle" size={18} color="#1cbd9d"/>
          <View style={styles.emailContainer}>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectText2Container}>{email.from}</Text>
              <Text style={styles.subjectTime2Container}>{email.time}</Text>
            </View>
            <Text style={styles.text2Container}>{email.subject}</Text>
            <Text style={styles.textContainer}>{email.text}</Text>
          </View>

          {this.state.showDelete ? (<View style={styles.emailDeleteContainer}>
            <TouchableOpacity style={styles.emailDeleteButton}>
              <Text style={styles.emailDeleteText}>Delete</Text>
            </TouchableOpacity>
          </View>) : (<View style={{position: 'absolute'}}></View>)}

        </TouchableOpacity>
      )
    } else {

      return (
        <TouchableOpacity style={styles.container}>
          <FaIcon name="circle" size={18} color="white"/>
          <View style={styles.emailContainer}>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectTextContainer}>{email.from}</Text>
              <Text style={styles.subjectTimeContainer}>{email.time}</Text>
            </View>
            <Text style={styles.textContainer}>{email.subject}</Text>
            <Text style={styles.textContainer}>{email.text}</Text>
          </View>

        </TouchableOpacity>
      )
    }
  }
}

export default EmailListScreen;
