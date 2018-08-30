import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: true,
            searchQuery: props.searchQuery
        }
    }

    componentDidMount(){
        this.doSearch();
    }

    doSearch(){
        console.log('search for keyword:', this.state.searchQuery);
    }

    render(){
        if(this.state.showProgress){
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' animating={true} />
                </View>
            )
        }
        
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

export default SearchResult;