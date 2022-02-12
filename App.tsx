import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['react-native-gesture-handler']);


const App = () => {
  return(
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  )
};

export default App;