/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Sample from '../sample';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const TabViewExample = function () {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'feed',
    };
  }

  render() {
    let {authInfo, onLogout} = this.props;
    return (
      <>
        <Sample />
      </>
      // <TabBarIOS style={styles.container}>
      //     <TabBarIOS.Item
      //         title='Feed'
      //         selected={this.state.selectedTab == 'feed'}
      //         onPress={() => this.setState({selectedTab: 'feed'})}>
      //             {/* <Welcome authInfo={authInfo} onLogout={onLogout}/> */}
      //             <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Feed, title: 'Feed' }}></NavigatorIOS>
      //     </TabBarIOS.Item>
      //     <TabBarIOS.Item
      //         title='Search'
      //         selected={this.state.selectedTab == 'search'}
      //         onPress={() => this.setState({selectedTab: 'search'})}>
      //             <NavigatorIOS style={{ flex: 1 }} initialRoute={{ component: Search, title: 'Search' }}></NavigatorIOS>
      //     </TabBarIOS.Item>
      // </TabBarIOS>
    );
  }
}

Container.propTypes = {
  authInfo: PropTypes.object,
  onLogout: PropTypes.func,
};

export default Container;
