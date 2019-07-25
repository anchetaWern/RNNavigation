import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import { goToLogin, goToTabs } from '../../navigation';

import AsyncStorage from '@react-native-community/async-storage';

export default class Loading extends Component {

  async componentDidMount() {
    const username = await AsyncStorage.getItem('username');

    if (username) {
      goToTabs(global.icons, username);
    } else {
      goToLogin();
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});