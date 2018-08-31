import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import cu from './lib/commonUtil';
import Login from './component/login';
import UnknowException from './component/unknowException';
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
      if(error) throw error;

      this.setState({
        checkingAuth: false,
        isLoggedIn: (!cu.isBlank(authInfo) && !cu.isBlank(authInfo.user)) ? true : false,
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
    else if(!isLoggedIn) {
      return (
        <Login onLogin={this.onLogin} />
      );
    }
    else if(isLoggedIn && authInfo && authInfo.user) {
      return (
        <Container authInfo={authInfo} onLogout={this.onLogout} />
      );
    }
    else {
      return (
        <UnknowException />
      );
    }
  }
}

export default App;
