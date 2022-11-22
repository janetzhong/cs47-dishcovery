import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, ScanScreen, SavedScreen, ProfileScreen , LoginScreen } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 14 },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Explore') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            

            return <Ionicons name={iconName} size={24} color="black" />;
          } 
        })}>
        {/* <Tab.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} /> */}
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 32,
  },
});
