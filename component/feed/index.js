import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, View, Text, Image, AppRegistry, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import moment from 'moment';
import styles from '../../Styles';
import authService from '../../services/authService';

class Feed extends Component {
    constructor(props) {
        super(props);
        
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds,
            showProgress: true
        };
    }

    componentDidMount(){
        this.fetchFeed();
    }

    fetchFeed(){
        authService.getAuthInfo((err, authInfo) => {
            let url = 'https://api.github.com/users/' + authInfo.user.login + '/received_events';
            fetch(url, {
                headers: authInfo.header
            })
            .then((response) => response.json())
            .then((data) => {
                let feedItems = _.filter(data, (ev) => { return ev.type == 'PushEvent'});
                this.setState({ 
                    dataSource: this.state.dataSource.cloneWithRows(feedItems),
                    showProgress: false
                });
            })
        });
    }

    renderRow(rowData, sectionID, rowID){
        return (
            <View style={{ 
                    flex: 1, 
                    flexDirection: 'row', 
                    padding: 20, 
                    alignItems: 'center', 
                    borderColor: '#D7D7D7',
                     borderBottomWidth: 1
            }}>
                <Image source={{ uri: rowData.actor.avatar_url }}
                    style={{ height: 36, width: 36, borderRadius: 18 }}>
                </Image>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ backgroundColor: '#FFF' }}>{moment(rowData.create_at).fromNow()}</Text>
                    <Text style={{ backgroundColor: '#FFF' }}>{rowData.actor.login}</Text>
                    <Text style={{ backgroundColor: '#FFF' }}>{rowData.payload.ref.replace('refs/heads/','')}</Text>
                </View>
            </View>
        )
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
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                backgroundColor: '#FFF',
                alignSelf: 'center',
                paddingTop: 60
            }}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
            </View>
        );
    }
};

Feed.propTypes = {
  title: PropTypes.string
};

export default Feed;