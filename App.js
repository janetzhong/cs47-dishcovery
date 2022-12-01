import { Text, View, StyleSheet ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ExploreScreen, ScanScreen, ScanIntroScreen, ScanCompleteScreen, SavedScreen , AdditionalContextScreen,ProfileScreen} from "./screens";
import { createStackNavigator } from '@react-navigation/stack';


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
import { DishCard } from "./components/DishCard.js";

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
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }

            return <Ionicons name={iconName} size={24} color="black" />;
          } 
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />          
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Scan" component={ScanStack} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           labelStyle: { fontSize: 14 },
//         }}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused }) => {
//             let iconName;

//             if (route.name === 'Explore') {
//               iconName = focused ? 'search' : 'search-outline';
//             } else if (route.name === 'Scan') {
//               iconName = focused ? 'camera' : 'camera-outline';
//             } else if (route.name === 'Saved') {
//               iconName = focused ? 'bookmark' : 'bookmark-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person-circle' : 'person-circle-outline';
//             }
            

//             return <Ionicons name={iconName} size={24} color="black" />;
//           } 
//         })}>
//         <Tab.Screen name="Explore" component={ExploreScreen} />
//         {/* <Tab.Screen name="Scan" component={ScanStackScreen} /> */}
//         <Tab.Screen name="Feed" component={FeedStackScreen} />
//         <Tab.Screen name="Saved" component={SavedScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   screenText: {
//     fontSize: 32,
//   },
// });
