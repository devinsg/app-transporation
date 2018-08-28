import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, TextInput, Image, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import buffer from 'buffer';

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
    },
    loader: {
        marginTop: 20
    }
});

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
          username: '',
          password: '',
          showProgress: false
      }
    }

    onChangeUserName(value) {
        //TextInput: autoCapitalize enum('none', 'sentences', 'words', 'characters')
        this.setState({ username: value });
    }

    onChangePassword(value) {
        this.setState({ password: value });
    }

    onLoginPressed() {
        let { username, password } = this.state;
        this.setState({ showProgress: true });
        let encodeAuthenticate = new buffer.Buffer(username + ':' + password).toString('base64');

        fetch('https://api.github.com/user',{
            headers: {
                'Authorization': 'Basic ' + encodeAuthenticate
            }
        })
        .then((response) => {
            if(response.status >= 200 && response.status < 300) {
                return response;
            }
            else if([401,403].indexOf(response.status)>=0) {
                throw 'bad credentials';
            }
            else {
                throw 'unknow error';
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            this.setState({ showProgress: false });
        })
        .catch((error) =>{
            console.log('logon failed:', error);
        })
        .finally(() => {
            this.setState({ showProgress: false });
        });
    }

    render() {
      return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.heading}>Github browser</Text>
            <TextInput style={styles.input} placeholder='Github username' onChangeText={(value) => this.onChangeUserName(value)} autoCapitalize='none'/> 
            <TextInput style={styles.input} placeholder='Github password' secureTextEntry={true} onChangeText={(value) => this.onChangePassword(value)}/>
            <TouchableHighlight style={styles.button} onPress={this.onLoginPressed.bind(this)}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableHighlight>

            <ActivityIndicator animating={this.state.showProgress} size='large' style={styles.loader}>
            </ActivityIndicator>
        </View>
      );
    }
  };
  
  Login.propTypes = {
  };
  
  export default Login;