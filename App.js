import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
//import Sample from './component/sample';
import Login from './component/login';

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      paddingTop: 40,
      alignItems: 'center'
  }
});

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false 
    }
    this.onLogin = this.onLogin.bind(this);
  }
  
  onLogin(){
    this.setState({ isLoggedIn: true });
  }

  render(){
    let { isLoggedIn } = this.state;
    if(isLoggedIn == null || !isLoggedIn){
      return (
        <Login onLogin={this.onLogin} />
      );
    }
    else{
      return (
        <View style={styles.container}>
          <Text>Welcome Home</Text>
        </View>
      );
    }
  }
}

export default App;
