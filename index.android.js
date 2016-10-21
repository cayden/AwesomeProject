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
import ScrollContent from './ScrollContent'

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

          <ScrollContent
              uri="http://ocef2grmj.bkt.clouddn.com/Group.png"
              title="Shopping directly"
              detail="Know your factories. Know your costs."
              subDetail="Always ask why."
              showEnter={false} />
          <ScrollContent
              uri="http://ocef2grmj.bkt.clouddn.com/Clothes-illustration.png"
              title="Buy shoes"
              detail="Know your factories. Know your costs."
              subDetail="Always ask why."
              showEnter={false} />
          <ScrollContent 
              uri="http://ocef2grmj.bkt.clouddn.com/Group1.png"
              title="Shopping directly"
              detail="Know your factories. Know your costs."
              subDetail="Always ask why."
              showEnter={true} />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'skyblue'
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
