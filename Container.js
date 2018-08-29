import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, TabBarIOS } from 'react-native';
import styles from './Styles';

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'feed'
        }
    }

    render() {
        //let { authInfo, onLogout } = this.props;
        return (
            // <View style={styles.container}>
            //     <Text>Welcome { authInfo.user ? authInfo.user.name : ''}</Text>
            //     <Text onPress={() => onLogout()}>Logout</Text>
            // </View>
            <TabBarIOS style={styles.container}>
                <TabBarIOS.Item 
                    title='Feed' 
                    selected={this.state.selectedTab == 'feed'} 
                    onPress={() => this.setState({selectedTab: 'feed'})}>
                        <Text style={styles.welcome}>Tab Feed</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item 
                    title='Search' 
                    selected={this.state.selectedTab == 'search'} 
                    onPress={() => this.setState({selectedTab: 'search'})}>
                        <Text style={styles.welcome}>Tab Search</Text>
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