'use strict'

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Navigator, TouchableOpacity, TextInput, Image } from 'react-native';
import NewEmailNavBar from '../components/NewEmailNavBar';
import styles from '../styles/NewEmailScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class NewEmailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddressBook: false,
      icon: 'plus'
    };
  }

  // opens and closes the address book
  handleAddressBook = () => {
    let icon;
    this.state.icon === 'plus' ? icon = 'minus' : icon = 'plus';

    this.setState({
      showAddressBook: !this.state.showAddressBook,
      icon: icon
    })
  }

  // renders a blank email template
  render () {
    const attachment = (<FaIcon name="paperclip" size={18} color='#9ca4ab' />)

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NewEmailNavBar navigator={this.props.navigator}/>
        <View style={styles.container}>

          <View style={styles.emailDetailFields}>
            <Text style={styles.emailLabel}>To:</Text>
            <TextInput
              style={{width: 290}}
              color="#525253"
              fontSize={15}
              onChangeText={(to) => this.setState({to})}
              value={this.state.to}
              />
            <TouchableOpacity onPress={this.handleAddressBook}>
              <FaIcon name={this.state.icon} size={18} color='#9ca4ab' />
            </TouchableOpacity>
          </View>

           {this.state.showAddressBook ? (<View style={styles.addressBookContainer}>
            <TouchableOpacity style={styles.addressBookRow} onPress={this.handleAddressBook}>
              <Image
                style={{height: 30, width: 30}}
                source={{uri: 'https://static1.squarespace.com/static/526839d5e4b0a6ea6c312276/526ef8b1e4b0aa6f78f3f614/5271642ce4b03e61739879b6/1383162937731/tim+in+India+profile_circle.png'}}
              />
            <View style={styles.addressTextContainer}>
                <Text style={styles.addressName}>Matt Vickers</Text>
                <Text style={styles.addressEmail}>matth@invisionapp.com</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addressBookRow} onPress={this.handleAddressBook}>
              <Image
                style={{height: 30, width: 30, borderRadius: 10}}
                source={{uri: 'https://static1.squarespace.com/static/555bc10de4b0cb6278f41a41/t/555bc301e4b0c04fc0d163c4/1432077057333/Manatee-website-01.png?format=500w'}}
              />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressName}>Manatee in a Sweater</Text>
                <Text style={styles.addressEmail}>manatee@invisionapp.com</Text>
              </View>
            </TouchableOpacity>
          </View>) : (<View></View>)}

          <View style={styles.emailDetailFields}>
            <Text style={styles.emailLabel}>Cc/Bcc:</Text>
            <TextInput
              style={{width: 290}}
              color="#525253"
              fontSize={15}
              onChangeText={(ccAndBcc) => this.setState({ccAndBcc})}
              value={this.state.ccAndBcc}
              />
          </View>

          <View style={styles.emailDetailFields}>
            <Text style={styles.emailLabel}>Subject:</Text>
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

export default NewEmailScreen;
