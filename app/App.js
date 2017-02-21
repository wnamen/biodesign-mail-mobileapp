import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import CustomStatusBar from './components/CustomStatusBar';
import Splash from './components/Splash';

import EmailListScreen from './screens/EmailListScreen';
import NewEmailScreen from './screens/NewEmailScreen';

class App extends Component {


  render () {
    return (
      <Splash>
        <View style={{flex:1}}>
          <CustomStatusBar />
          <AppNavigator />
        </View>
      </Splash>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
