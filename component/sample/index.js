import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Sample extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let spImage = require('../../images/sharepoint-hub-site.png');
    
    return (
      <View style={styles.container}>
        <Text>First React-Native-App !</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>

        <Text>SharePoint</Text>
        <Image source={spImage} style={{width: 293, height: 210}}/>
        <Text>CopyRight@2017 - Author: Vo Duy Anh</Text>      
      </View>
    );
  }
}

export default Sample;