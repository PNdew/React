import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('MyNewProject', () => App);
AppRegistry.runApplication('MyNewProject', {
  rootTag: document.getElementById('root')
});