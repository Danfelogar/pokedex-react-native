import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['react-native-gesture-handler']);


const App = () => {
  return(
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
};

export default App;