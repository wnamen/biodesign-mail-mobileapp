import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import styles from '../styles/SplashScreen';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  // removes the splash screen after 3 seconds
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  // renders the Splash Screen
  render = () => {
    return (
      this.state.loading ?
        (
          <View style={{flex: 1}}>
            <CustomStatusBar />
            <Image
              style={styles.backgroundImage}
              source={{uri: 'https://s3.invisionapp-cdn.com/storage.invisionapp.com/screens/files/219158000.png?x-amz-meta-iv=1&response-cache-control=max-age%3D2419200&x-amz-meta-ck=4e88b6c68ef725e1d7969b2374198f3c&AWSAccessKeyId=AKIAJFUMDU3L6GTLUDYA&Expires=1491004800&Signature=NoCMOJlSfbVaBHKo1NlaS6lCjWQ%3D'}}
            />
          </View>
        )
        : ({...this.props.children})
    )
  }
}

export default SplashScreen;
