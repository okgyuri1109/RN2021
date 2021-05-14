/**
 * @format
 */

 import react from 'react';
 import {AppRegistry} from 'react-native';
 import App from './app/App';
 import {name as appName} from './app.json';
 const myComponentTest = () => <App />
 
 AppRegistry.registerComponent(appName, () => App);