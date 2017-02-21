'use strict'

import React, { Component } from 'react';
import { Navigator, View } from 'react-native';

import EmailListScreen from '../screens/EmailListScreen';
import NewEmailScreen from '../screens/NewEmailScreen';
import EmailScreen from '../screens/EmailScreen';

class AppNavigator extends Component {


  renderScene(route, navigator) {

    console.log(route);
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "EmailList":
        return (
          <EmailListScreen
            {...globalNavigatorProps} />
        )
      case "NewEmail":
        return (
          <NewEmailScreen
            {...globalNavigatorProps} />
        )
      case "EmailView":
        return (
          <EmailScreen
            {...globalNavigatorProps} />
        )

    }
  }

  render() {
    return (
        <Navigator
          style={{flex: 1}}
          initialRoute={{ident: "EmailList"}}
          ref="appNavigator"
          renderScene={this.renderScene}
          configureScene={(route) => ({
            ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

export default AppNavigator;
