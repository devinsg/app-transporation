import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';

const logo = require('../../images/master.png');
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center'
    },
    logo: {
        width: 66,
        height: 55
    },
    heading: {
        fontSize: 30,
        marginTop: 10
    },
    input: {
        height: 50,
        width: 300,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
        borderRadius: 50,
        textAlign: 'center'
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#48BBEC',
        alignItems: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    }
});

class Login extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.heading}>Github browser</Text>
            <TextInput style={styles.input} placeholder='Github username' />
            <TextInput style={styles.input} placeholder='Github password' secureTextEntry={true} />
            <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}> Log In </Text>
            </TouchableHighlight>
        </View>
      );
    }
  };
  
  Login.propTypes = {
  };
  
  export default Login;