/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './screens/app';
import Pwa from './screens/pwa';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Pwa);
