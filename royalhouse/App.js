
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
// const [initialState, setInitialState] = useState()
import SafeAreaView from 'react-native-safe-area-view';
import { Audio } from 'expo-av';
import * as React from 'react';

//Screens 
import HomeScreen from './screens/HomeScreen';
import SermonsScreen from './screens/SermonsScreen';
import EventsScreen from './screens/EventsScreen';
import GiveScreen from './screens/GiveScreen';
import GalleryScreen from './screens/GalleryScreen';


//Theme Colors
const offForegroundColor = "#2E3B56"
const offBackgroundColor = "#000000"

//Route Names
const homeName = "Home";
const eventsName = "Events";
const sermonName = "Sermons";
const giveName = "Give";
const galleryName = "Gallery";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator

        initialRouteName={homeName}
        screenOptions={(({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;

            if (route.name === "Sermons") {
              iconName = focused ? "book" : "book-outline"
            } else if (route.name === "Events") {
              iconName = focused ? "ios-today" : "ios-today-outline"
            } else if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline"
            } else if (route.name === "Give") {
              iconName = focused ? "heart" : "heart-outline"
            } else if (route.name === "Gallery") {
              iconName = focused ? "ios-images" : "ios-images-outline"
            }
            return <Ionic name={iconName} size={size} colour={colour} />
          },
          headerShown:false // set to remove titles from each screens
        }))}
      >
        <Tab.Screen name="Sermons" component={SermonsScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Give" component={GiveScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offBackgroundColor,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});


