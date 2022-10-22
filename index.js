/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyAppProvider from './components/MyProvider';

AppRegistry.registerComponent(appName, () => MyAppProvider);
