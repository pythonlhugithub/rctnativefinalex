import * as React from 'react';
import {Pressable, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChangePlan from './ChangePlan';
import ContactUs from './ContactUs';
import imhome from '../assets/home.jpg';
import imcl from '../assets/changpln.png';
import imct from '../assets/contact.png';
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
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home page',
            tabBarIcon: ({size, focused, color}) => {
              return <Image style={{width: 30, height: 30}} source={imhome} />;
            },
          }}
        />
        <Tab.Screen
          name="ChangePlan"
          component={ChangePln}
          options={{
            title: 'Change plan',
            tabBarIcon: (size, focused, color) => {
              return <Image style={{width: 30, height: 30}} source={imcl} />;
            },
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactUs}
          options={{
            title: 'Contact us',
            tabBarIcon: (size, focused, color) => {
              return <Image style={{width: 30, height: 30}} source={imct} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeTabs;
