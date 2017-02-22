import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import SplashScreen from './screens/SplashScreen';

class App extends Component {
  // renders an application with the splash screen as the layout and the app on top of it.
  render () {
    return (
      <SplashScreen>
        <View style={{flex:1}}>
          <CustomStatusBar />
          <AppNavigator />
        </View>
      </SplashScreen>
    )
  }
}

export default App;
