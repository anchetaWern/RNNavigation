import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();

import AsyncStorage from "@react-native-async-storage/async-storage";

import { goToLogin } from "../../navigation";

export default class Home extends Component {
  render() {
    const { username } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi {username}!</Text>
        <Button onPress={this.logout} title="Logout" color="#841584" />
      </View>
    );
  }
  //

  logout = async () => {
    await AsyncStorage.removeItem("username");
    goToLogin();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
