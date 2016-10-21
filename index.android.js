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
import GuidePage from './GuidePage';

export default class AwesomeProject extends Component {

  render() {

    let objects = [
      {
        uri: "http://ocef2grmj.bkt.clouddn.com/Group.png",
        title: "Shopping directly",
        detail: "Know your factories. Know your costs.",
        subDetail: "Always ask why."
      },
      {
        uri: "http://ocef2grmj.bkt.clouddn.com/Clothes-illustration.png",
        title: "Hello world!",
        detail: "Know your factories. Know your costs.",
        subDetail: "Always ask why."
      },
      {
        uri: "http://ocef2grmj.bkt.clouddn.com/Group1.png",
        title: "What are you doing?",
        detail: "Know your factories. Know your costs.",
        subDetail: "Always ask why."
      }
    ];

    return (
      <View style={styles.container}>
        <GuidePage objects={objects} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
