import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import CustomStatusBar from './components/CustomStatusBar';
import Splash from './components/Splash';
import EmailListScreen from './screens/EmailListScreen';

class App extends Component {


  render () {
    return (
      <Splash>
        <View>
          <CustomStatusBar />
          <EmailListScreen />
        </View>
      </Splash>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default App;
