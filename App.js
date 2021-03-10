/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {DrawerContent} from './src/screens/DrawerContent';
//Screens
import Notes from './src/screens/Notes/Notes';
import CreateNote from './src/screens/CreateNote/CreateNote';
//Enable screens support before any of your navigation screens renders.
enableScreens();

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        headerMode="float"
        animation="fade">
        <Drawer.Screen name="Notes" component={Notes} />
        <Drawer.Screen name="Create Note" component={CreateNote} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
