import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './pages/home';
import AddScreen from './pages/add';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'white',
                style: {
                    backgroundColor: '#f9f9f9',
                },
                showLabel: true,
                activeBackgroundColor: "black",
                inactiveBackgroundColor: "#212121"
              }}>
              <Tab.Screen
                name="Home" component={HomeScreen}
                options={{
                  tabBarLabel: 'Black list',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="notebook-outline" color={color} size={size} />
                  ),
                }}/>
              <Tab.Screen
                name="Add" component={AddScreen}
                options={{
                  tabBarLabel: 'Add',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="pencil-plus-outline" color={color} size={size} />
                  ),
                }}/>
            </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: 'black'
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: 'black',
    }
});

export default App;
