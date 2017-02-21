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
    const attachment = (<FaIcon name="paperclip" size={18} color='#9ca4ab' />)
    const plus = (<FaIcon name="plus" size={18} color='#9ca4ab' />)

    return (
      <View style={{flex: 1}}>
        <NewEmailNavBar navigator={this.props.navigator}/>
        <View style={styles.container}>
          <View style={styles.emailDetailFields}>
            <Text style={{color: '#9ca4ab', fontSize: 15}}>To:</Text>
            <TextInput
              style={{width: 290}}
              color="#525253"
              fontSize={15}
              onChangeText={(to) => this.setState({to})}
              value={this.state.to}
              />
            { plus }
          </View>
          <View style={styles.emailDetailFields}>
            <Text style={{color: '#9ca4ab', fontSize: 15}}>Cc/Bcc:</Text>
            <TextInput
              style={{width: 290}}
              color="#525253"
              fontSize={15}
              onChangeText={(ccAndBcc) => this.setState({ccAndBcc})}
              value={this.state.ccAndBcc}
              />
          </View>
          <View style={styles.emailDetailFields}>
            <Text style={{color: '#9ca4ab', fontSize: 15}}>Subject:</Text>
            <TextInput
              style={{width: 260}}
              color="#525253"
              fontWeight='bold'
              fontSize={15}
              onChangeText={(subject) => this.setState({subject})}
              value={this.state.subject}
              />
            { attachment }
          </View>
          <View style={styles.emailTextField}>
            <TextInput
              style={{width: 350}}
              color="#525253"
              multiline = {true}
              fontSize={15}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              />
          </View>
        </View>
      </View>
    )
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  emailDetailFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  emailTextField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 5000,
    paddingHorizontal: 15,
    paddingVertical: 10,

  }
});

export default NewEmailScreen;
