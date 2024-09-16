import React, { Component } from 'react';

import { StyleSheet, View, Text, Button, BackHandler } from 'react-native';

export default class EditScreen extends Component {
   
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }


  render() {
    return (
      <View>
        <Text> EditScreen </Text>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
  EditScreen.navigationOptions = {
    title: 'Edit Data Product',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });

