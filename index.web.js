import { AppRegistry } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

// Register the app
AppRegistry.registerComponent('MyNewProject', () => LoginScreen);

// Run web application
AppRegistry.runApplication('MyNewProject', {
  rootTag: document.getElementById('root')
});