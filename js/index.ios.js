'use strict';
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Dimensions
} from 'react-native';

import Pili, {
    Streaming,
    Player,
    StreamingConst
} from 'react-native-pili';

var {height, width} = Dimensions.get('window');

import PlayerView from './component/PlayerView';
import StreamingView from './component/StreamingView';

class pilipili extends Component {
  constructor() {
    super();
  }

  render() {
    return <StreamingView />
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => pilipili);
