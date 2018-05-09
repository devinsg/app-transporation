import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>

        <Text>Hello world !</Text>
        <Text>First React-Native-App !</Text>
        <Text>CopyRight 2017 - Author: Vo Duy Anh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
