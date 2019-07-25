import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class ForgotPassword extends Component {

  static get options() {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Forgot Password'
        }
      }
    };
  }

  state = {
    email: ''
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>

          <View style={styles.main}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Enter your email</Text>
              <TextInput
                onChangeText={email => this.setState({ email })}
                style={styles.textInput}
              />
            </View>

            <Button title="Send Email" color="#0064e1" onPress={this.sendEmail} />

          </View>
        </View>
      </View>
    );
  }

  //
  sendEmail = async () => {

  }

}
//

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  fieldContainer: {
    marginTop: 20
  },
  label: {
    fontSize: 16
  },
  textInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#eaeaea",
    padding: 5
  }
});