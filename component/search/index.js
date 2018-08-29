import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, AppRegistry } from 'react-native';
import styles from '../../Styles';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
        );
    }
};

Search.propTypes = {
  title: PropTypes.string
};

export default Search;