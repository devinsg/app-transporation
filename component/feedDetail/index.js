import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View, Text, Image } from 'react-native';

class FeedDetail extends Component {
    constructor(props) {
        super(props);
        
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds
        };
    }

    render(){
        return (
            <View style={{ flex: 1, paddingTop: 120, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text>View Detail</Text>
            </View>
        );
    }
};

FeedDetail.propTypes = {
  title: PropTypes.string
};

export default FeedDetail;