/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import './src/i18n/i18n';
import App from './src/App';

AppRegistry.registerComponent(appName, () => App);
