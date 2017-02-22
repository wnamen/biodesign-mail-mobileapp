'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Navigator, TouchableOpacity, TextInput } from 'react-native';
import InboxNavBar from '../components/InboxNavBar';
import MenuDrawer from '../components/MenuDrawer';
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
      openDrawer: false,
      iconColor: '#9ca4ab'
    }
    this.handleDrawer = this.handleDrawer.bind(this);
    this.navigateToEmail = this.navigateToEmail.bind(this);
  }

  navigateToEmail = () => {
    this.props.navigator.push({ ident: 'EmailView' })
  }

  handleDrawer = () => {
    this.setState({openDrawer: !this.state.openDrawer})
  }

  render () {
    const search = (<Icon name="search" size={18} color={this.state.iconColor} />)
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
            { search }
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
        <TouchableOpacity style={styles.container}>
          <FaIcon name="circle" size={18} color="#1cbd9d"/>
          <View style={styles.emailContainer}>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectText2Container}>{email.from}</Text>
              <Text style={styles.subjectTime2Container}>{email.time}</Text>
            </View>
            <Text style={styles.text2Container}>{email.subject}</Text>
            <Text style={styles.textContainer}>{email.text}</Text>
          </View>

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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',

  },
  markerContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#1cbd9d',
  },
  emailContainer: {
    flexDirection: 'column',
    width: 300
  },
  subjectContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  subjectTextContainer: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 15,
    color: "#525253"
  },
  subjectTimeContainer: {
    flex: 1,
    textAlign: 'right',
    color: "#9ca4ab",
    fontSize: 12,

  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    color: '#525253'
  },
  subjectText2Container: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: "#525253"
  },
  subjectTime2Container: {
    flex: 1,
    textAlign: 'right',
    color: '#2A9FD8',
    fontSize: 12,

  },
  text2Container: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#525253'
  },
});

export default EmailListScreen;
