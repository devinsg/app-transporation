import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, Button, NavigatorIOS, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view'; 
import styles from './styles';
import Screen01 from './screen01';
import Screen02 from './screen02';

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
    first: Screen01,
    second: Screen02
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
