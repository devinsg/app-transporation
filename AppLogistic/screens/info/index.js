import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, Button, NavigatorIOS, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view'; 
import styles from './styles';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);
  
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const Info = ({title, authInfo, onLogout}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome {authInfo.user ? authInfo.user.name : ''}</Text>
      <Text onPress={() => onLogout()}>Logout</Text>
    </View>
  );  
};

Info.propTypes = {
  title: PropTypes.string,
  authInfo: PropTypes.object,
  onLogout: PropTypes.func,
};

const TabViewExample = function() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });
  
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TabViewExample;
