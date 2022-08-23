/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Main from './Main';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Main));
