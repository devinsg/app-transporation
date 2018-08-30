import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './style';

class SearchResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.searchContainer}>
                Search Result
            </View>
        );
    }
};

SearchResult.propTypes = {
  title: PropTypes.string
};

export default Search;