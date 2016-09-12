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
		        return <View><Text>Text</Text></View>
				  }
}


AppRegistry.registerComponent('Example', () => pilipili);
