import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChangePlan from './ChangePlan';
import ContactUs from './ContactUs';

function Home() {
  return <HomeScreen />;
}

function ChangePln({navigation}) {
  return <ChangePlan />;
}

function Story({navigation}) {
  return <ContactUs />;
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ChangePlan" component={ChangePln} />
        <Tab.Screen name="Contact" component={ContactUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeTabs;
