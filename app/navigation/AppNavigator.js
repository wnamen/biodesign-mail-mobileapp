'use strict'

import React, { Component } from 'react';
import { Navigator, View } from 'react-native';

import EmailListScreen from '../screens/EmailListScreen'

class AppNavigator extends Component {


  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "EmailList":
        return (
          <EmailListScreen
            {...globalNavigatorProps} />
        )
    }
  }

  render() {
    return (
      <View>
        <Navigator
          initialRoute={{ident: "EmailList"}}
          ref="appNavigator"
          renderScene={this._renderScene} />
      </View>
    )
  }

}

export default AppNavigator;
