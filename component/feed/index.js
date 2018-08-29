import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, AppRegistry } from 'react-native';
import styles from '../../Styles';

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        );
    }
};

Feed.propTypes = {
  title: PropTypes.string
};

export default Feed;