import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import SplashScreen from './screens/SplashScreen';

class App extends Component {


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

const styles = StyleSheet.create({

});

export default App;
