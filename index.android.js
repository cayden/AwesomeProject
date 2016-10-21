/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    var windowWidth = Dimensions.get('window').width;
    var windowHeight = Dimensions.get('window').height;
    return (
      <View style={styles.container}>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          pagingEnabled={true}
          style={styles.scrollView}>

          <View style={{ backgroundColor: 'orange', height: windowHeight, width: windowWidth }} />
          <View style={{ backgroundColor: 'red', height: windowHeight, width: windowWidth }} />
          <View style={{ backgroundColor: 'yellow', height: windowHeight, width: windowWidth }} />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'skyblue'
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
