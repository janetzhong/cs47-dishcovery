import { Text, View, StyleSheet ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ExploreScreen, ScanScreen, ScanIntroScreen, ScanCompleteScreen, SavedScreen , AdditionalContextScreen,ProfileScreen} from "./screens";
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS } from "./constants";

import useFonts from './hooks/useFonts';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
        <Tab.Navigator>
           <Tab.Screen name='Home' component={HomeScreen}/>
           <Tab.Screen name='Explore' component={ExploreScreen}/>
           <Tab.Screen name='Scan' component={ScanStack}/>
           <Tab.Screen name='Saved' component={SavedScreen}/>
           <Tab.Screen name='Profile' component={ProfileScreen}/>
        </Tab.Navigator>
   )
}

const Stack = createStackNavigator()
const ScanStack = () => {
    return (
      <Stack.Navigator initialRoutName="ScanIntroScreen">
         <Stack.Screen name="Scan Intro Screen" component={ScanIntroScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Scan Screen" component={ScanScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Scan Complete Screen" component={ScanCompleteScreen}/>
         <Stack.Screen name="Additional Context" component={AdditionalContextScreen}  />
      </Stack.Navigator>
    )
}

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.dishcoveryOrange,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { 
            fontSize: 14,
            fontFamily: 'InterRegular',
            position: 'absolute',
            bottom:-15,
            left:20,
            right:20,
          },
          tabBarStyle : {
            position: 'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor: 'white',
            borderRadius:15,
            height:80,
            padding:10
          },

          tabBarIcon: ({ focused, color }) => {
            let iconName;
            color = focused ? COLORS.dishcoveryOrange : "grey";
            if (route.name === 'Explore') {
              //iconName = focused ? 'location' : 'location-outline';
              iconName = 'location';
            } else if (route.name === 'Scan') {
              iconName = 'scan-circle';
            } else if (route.name === 'Liked') {
              iconName = 'heart';
            } 
            return <Ionicons name={iconName} size={28} color= {color} />;
          } 
        })}>
        {/* <Tab.Screen name="Home" component={HomeScreen} />           */}
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Scan" component={ScanStack} />
        <Tab.Screen name="Liked" component={SavedScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
