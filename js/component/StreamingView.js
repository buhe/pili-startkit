/**
 * Created by buhe on 16/9/18.
 */
import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight
} from 'react-native';

var {height, width} = Dimensions.get('window');

import Pili, {
    Streaming,
    Player,
    StreamingConst
} from 'react-native-pili';

var zoom = 1;

export default class StreamingView extends Component {
  constructor() {
    super();
    this.state = {
      muted: false,
      started: true,
      text: '...',
      focus:true,
      zoom: 1,
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Streaming
              rtmpURL={"rtmp://pili-publish.pilitest.qiniucdn.com/pilitest/demo_test?key=6eeee8a82246636e"}
              style={{
                                    height:height,
                                    width:width,
                                  }}
              zoom={this.state.zoom}
              focus={this.state.focus}
              profile={{
                            video:{
                              fps:30,
                              bps:1000 * 1024,
                              maxFrameInterval:48
                            },
                            audio:{
                              rate:44100,
                              bitrate:96 * 1024
                            },
                            encodingSize:StreamingConst.encodingSize._480
                          }}
              started={this.state.started}
              onReady={()=>this.setState({text: "onReady"})} //onReady event
              onConnecting={()=>this.setState({text: "onConnecting"})} //onConnecting event
              onStreaming={()=>this.setState({text: "onStreaming"})} //onStreaming event
              onShutdown={()=>this.setState({text: "onShutdown"})} //onShutdown event
              onIOError={()=>this.setState({text: "onIOError"})} //onIOError event
              onDisconnected={()=>this.setState({text: "onDisconnected"})} //onDisconnected event
              />
          <View style={{position:'absolute',left:50,top:50,width:200,height:200}}>
            <Text>{this.state.text}</Text>
            <TouchableHighlight onPress={this.zoom1.bind(this)}>
              <Text style={{height:100,width:100}}>Zoom+</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.zoom2.bind(this)}>
              <Text style={{height:100,width:100}}>Zoom-</Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }

  zoom1() {
    zoom = zoom + 1;
    if (zoom < 0) {
      zoom = 1;
    }
    this.setState({zoom: zoom});
  }
  zoom2() {
    zoom = zoom - 1;
    if (zoom < 0) {
      zoom = 1;
    }
    this.setState({zoom: zoom});
  }

  onState() {
    this.setState({text: "loading"});
  }

  start() {
    this.setState({
      started: !this.state.started
    });
  }

  mute() {
    this.setState({
      muted: !this.state.muted
    });
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