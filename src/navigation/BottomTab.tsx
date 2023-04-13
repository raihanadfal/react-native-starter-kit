import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screens import
import HomeScreen from '../screens/homeScreen/HomeScreen'
import ProfileScreen from '../screens/profileScreen/ProfileScreen'

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/images/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'green' : '#999'
              }} />
            </View>
          </>
        ),
      tabBarShowLabel: false }
      }/>
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
          <>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/images/user.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'green' : '#999'
              }} />
            </View>
          </>
        ),
        tabBarShowLabel: false}
      }/>
    </Tab.Navigator>
  );
}

export default BottomTab

const styles = StyleSheet.create({})