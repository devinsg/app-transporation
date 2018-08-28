import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import styles from './Styles';

class Container extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let { authInfo, onLogout } = this.props;
        return (
            <View style={styles.container}>
                <Text>Welcome { authInfo.user ? authInfo.user.name : ''}</Text>
                <Text onPress={() => onLogout()}>Logout</Text>
            </View>
        )
    }
}

Container.propTypes = {
    authInfo: PropTypes.object,
    onLogout: PropTypes.func
}

export default Container;