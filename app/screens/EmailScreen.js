'use strict'

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Navigator, TouchableOpacity, Image } from 'react-native';

import EmailNavBar from '../components/EmailNavBar';
import EmailRow from '../components/EmailRow';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class EmailScreen extends Component {
  constructor(props) {
    super(props)

  }

  navigateToAttachment = () => {
    this.props.navigator.push({ ident: 'EmailAttachment' })
  }

  render () {
    const image = (<View style={styles.imageContainer}><FaIcon name="picture-o" size={30} color='white' /></View>);
    const currentEmailReply = (<Icon name="reply" size={23} color="#9ca4ab" />);
    const reply = (<Icon name="reply" size={35} color="#9ca4ab" />);
    const forward = (<Icon name="forward" size={35} color="#9ca4ab" />);
    const more = (<TouchableOpacity><Icon name="more-horiz" size={30} color="#9ca4ab" backgroundColor="#9ca4ab"/></TouchableOpacity>);

    return (
      <View style={{flex: 1}}>
        <EmailNavBar navigator={this.props.navigator}/>
        <ScrollView>
          <View style={styles.emailTitle}>
            <Text style={styles.title}>We should grab some dinner tonight.</Text>
          </View>

          <EmailRow
            imageLink={'https://static1.squarespace.com/static/526839d5e4b0a6ea6c312276/526ef8b1e4b0aa6f78f3f614/5271642ce4b03e61739879b6/1383162937731/tim+in+India+profile_circle.png'}
            subjectText={'Matt Vickers'}
            subjectTime={'14:39'}
            emailText={'How do you feel about grabbing a burger tonight? I know a great place.'}
            />

          <EmailRow
            imageLink={'https://kidurbanist.files.wordpress.com/2013/06/profile-pic-circle.png'}
            subjectText={'Billy Kiely'}
            subjectTime={'8:14'}
            emailText={'Is it that place that Jon was talking about earlier today?'}
            />

          <View style={styles.currentEmailRow}>
            <View style={styles.container}>
              <Image
                style={{height: 60, width: 60}}
                source={{uri: 'https://thecityprincessdotcom.files.wordpress.com/2014/02/profile-in-circle.png'}}
              />
              <View style={{width: 270}}>
                <View style={styles.subjectContainer}>
                  <Text style={styles.subjectTextContainer}>Laura Williams</Text>
                  <Text style={styles.subjectIconContainer}>{ currentEmailReply }</Text>
                </View>
                <Text style={styles.currentEmailSubtext}>to Billy Kiely</Text>
                <Text style={styles.currentEmailSubtime}>15 seconds ago</Text>
              </View>
            </View>
            <View style={styles.currentEmailTextContainer}>
              <Text style={styles.currentEmailText}>You know it is.</Text>
              <Text style={styles.currentEmailText}>Burgerlord of the Rings on me.</Text>
              <Text style={styles.currentEmailText}>Meet there at 6pm?</Text>
            </View>
            <View style={{flexDirection: 'row'}}>

                { more }

            </View>
          </View>

          <View style={styles.attachmentTitleContainer}>
            <Text style={styles.attachmentTitle}>1 Attachment</Text>
          </View>

          <TouchableOpacity style={styles.attachmentContainer} onPress={this.navigateToAttachment}>
            { image }
            <Text style={styles.attachmentText}>burger-week-2013.jpg</Text>
          </TouchableOpacity>

        </ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tab}>
            { reply }
            <Text style={styles.tabText}>Reply</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Forward</Text>
            { forward }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  emailTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: "#525253",
    fontWeight: 'bold'
  },
  currentEmailRow: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectTextContainer: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: "#525253"
  },
  subjectIconContainer: {
    textAlign: 'left',
  },
  currentEmailSubtext: {
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: 8,
    color: "#525253"
  },
  currentEmailSubtime: {
    fontWeight: '200',
    fontSize: 11,
    paddingBottom: 7,
    color: "#525253"
  },
  currentEmailTextContainer: {
    paddingTop: 10,
    paddingBottom: 5
  },
  currentEmailText: {
    color: "#525253",
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20
  },
  moreButton: {
    backgroundColor: '#9ca4ab',
    borderWidth: 0.1,
    borderRadius: 4,
  },
  attachmentTitleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  attachmentTitle: {
    color: "#525253",
    fontSize: 12,
    fontWeight: '300'
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 7,
    paddingVertical: 9,
    borderRadius: 2,
  },
  attachmentText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1E90FF',
    textAlign: 'left',
    paddingLeft: 15
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: "#fafafa",
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  tabText: {
    color: '#9ca4ab',
    fontSize: 15,
    fontWeight: '300',
    paddingHorizontal: 10
  }
});

export default EmailScreen;
