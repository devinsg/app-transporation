import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
//import Sample from './component/sample';
import Login from './component/login';
import AuthService from './services/authService';

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      paddingTop: 40,
      alignItems: 'center'
  },
  loader: {
  }
});

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    }
    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount(){
    AuthService.getAuthInfo((error, authInfo) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: (authInfo == null || authInfo == undefined) ? false : true,
        authInfo: authInfo
      })
    });
  }
  
  onLogin(){
    this.setState({ isLoggedIn: true });
  }

  render(){
    let { isLoggedIn, checkingAuth, authInfo } = this.state;

    if(checkingAuth) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} size='large' style={styles.loader}>
          </ActivityIndicator>
        </View>
      );
    }
    else if(isLoggedIn == null || !isLoggedIn) {
      return (
        <Login onLogin={this.onLogin} />
      );
    }
    else if(isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text>Welcome { authInfo.user ? authInfo.user.name : ''}</Text>
        </View>
      );
    }
  }
}

export default App;
