import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, TabBarIOS } from 'react-native';
import styles from './Styles';
import Feed from './component/feed';
import Search from './component/search';
import Welcome from './component/welcome';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'feed'
        }
    }

    render() {
        let { authInfo, onLogout } = this.props;
        return (
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item 
                    title='Feed' 
                    selected={this.state.selectedTab == 'feed'} 
                    onPress={() => this.setState({selectedTab: 'feed'})}>
                        <Feed />
                    {/* <Welcome authInfo={authInfo} onLogout={onLogout}/> */}
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                    title='Search' 
                    selected={this.state.selectedTab == 'search'} 
                    onPress={() => this.setState({selectedTab: 'search'})}>
                        <Search />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

Container.propTypes = {
    authInfo: PropTypes.object,
    onLogout: PropTypes.func
}

export default Container;