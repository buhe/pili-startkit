'use strict';
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry
} from 'react-native';

class pilipili extends Component {
  constructor() {
    super();
  }

  render() {
    return <View style={{top:100}}>
              <Text>abc</Text>
            </View>
  }
}


AppRegistry.registerComponent('Example', () => pilipili);
