/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from "./src/components/navigators/AppNavigator" // exo ppt 6 - 1
import { AppTabNavigator } from "./src/components/navigators/AppTabNavigator"  // exo ppt 6 - 2
import { Provider } from "react-redux"
import { store } from "./src/redux/store";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <Provider store={store}>
          <NavigationContainer>
            <AppTabNavigator></AppTabNavigator>
          </NavigationContainer>
      </Provider>
  );
};

export default App;
