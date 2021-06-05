import React from 'react';
import {Provider} from 'react-redux';
import {Text, View, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import App from '../app';
import Welcome from '../info';

import configureStore from '../../store';
const store = new configureStore();

function HomeScreen({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Click to Logistic App</Text>
      <Button title="App" onPress={() => navigation.navigate('App')} />
      <Text>Click to Sample</Text>
      <Button title="Welcome" onPress={() => navigation.navigate('Welcome')} />
    </View>
  );
}

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{title: 'Welcome'}}
            />
            <Stack.Screen name="App" component={App} options={{title: 'App'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default Main;
