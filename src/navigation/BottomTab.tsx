import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screens import
import HomeScreen from '../screens/homeScreen/HomeScreen'
import ProfileScreen from '../screens/profileScreen/ProfileScreen'

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab

const styles = StyleSheet.create({})