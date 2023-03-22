/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MyAppProvider from './components/MyProvider';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => MyAppProvider);
