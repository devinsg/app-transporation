import React, { Component } from 'react';
import { AppRegistry, Text, View, ActivityIndicator } from 'react-native';
import Login from './component/login';
import AuthService from './services/authService';
import styles from './Styles';
import Container from './Container';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    }
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
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

  onLogout(){
    this.setState({ isLoggedIn: false });
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
        <Container authInfo={authInfo} onLogout={this.onLogout} />
      );
    }
  }
}

export default App;
