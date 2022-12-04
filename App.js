import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ExploreScreen, ScanScreen, ScanIntroScreen, ScanCompleteScreen, SavedScreen , AdditionalContextScreen,ProfileScreen} from "./screens";
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS } from "./constants";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

// import * as SplashScreen from 'expo-splash-screen';
// SplashScreen.preventAutoHideAsync();

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
         <Stack.Screen name="Additional Context" component={AdditionalContextScreen}  />
      </Stack.Navigator>
    )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf')
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.dishcoveryOrange,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { 
            fontSize: 14,
            fontFamily: 'Inter-Medium',
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
            padding:10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-SemiBold',
            textTransform: 'uppercase',
            color: COLORS.dishcoveryOrange
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
        <Tab.Screen name="Explore" component={ExploreScreen}  />
        <Tab.Screen name="Scan" component={ScanStack} />
        <Tab.Screen name="Liked" component={SavedScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
