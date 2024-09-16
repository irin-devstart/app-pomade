import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', '3432534252345235235');
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <Text> LoginScreen </Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

