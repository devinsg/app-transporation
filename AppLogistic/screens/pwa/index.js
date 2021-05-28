import React from 'react';
import {WebView} from 'react-native-webview';

const link_app_delivery = 'https://demo-delivery.azurewebsites.net/';

class Gold extends React.Component {
  render() {
    return <WebView source={{uri: link_app_delivery}} />;
  }
}

export default Gold;