import * as React from 'react';
import { useEffect } from 'react';
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChangePlan from './ChangePlan';
import ContactUs from './ContactUs';
import imhome from '../assets/home.jpg';
import imcl from '../assets/changpln.png';
import imct from '../assets/contact.png';
import imy from '../assets/aio1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function HomeTabs(props) {
  const setUsrid = () => {
    AsyncStorage.setItem('User_Id', JSON.stringify('addone'));
  };
  setUsrid();

  // const getuserid = async () => {
  //   await AsyncStorage.getItem('User_Id').then(res => {
  //     console.log(res)
  //     return res;
  //   });
  // };
  
  const removeItem = async () => {
    await AsyncStorage.clear();
  };
  removeItem();



  const [animatingl, setAnimating] = React.useState(true);
  const [gonext, setGonext] = React.useState(false);
  const [flag, setFlag] = React.useState('');

  useEffect(()=>{
  (
    async()=>{
     const x= await await AsyncStorage.getItem('User_Id').then(res => {
      return res!=''?true:false;
    });
     setFlag(x);
    })()}, [flag])

  // return (
  //   <NavigationContainer>
  //     {flag && <AuthNavigator />};
  //   </NavigationContainer>
  // );

  console.log(flag)

  setTimeout(() => {
    setAnimating(false);
  }, 2000);

  return (
    <SafeAreaView>
      {animatingl ? (
        <View style={styles.container}>
          <ActivityIndicator
            animating={animatingl}
            color="white"
            style={styles.activityIndicator}
          />
          <Image source={imy} style={styles.imgflex} />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'stretch',
            marginBottom: 0,
            width: 410,
            height: 700,
          }}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'Home page',
                  tabBarIcon: ({size, focused, color}) => {
                    return (
                      <Image style={{width: 30, height: 30}} source={imhome} />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="ChangePlan"
                component={ChangePlan}
                options={{
                  title: 'Change plan',
                  tabBarIcon: (size, focused, color) => {
                    return (
                      <Image style={{width: 30, height: 30}} source={imcl} />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Contact"
                component={ContactUs}
                options={{
                  title: 'Contact us',
                  tabBarIcon: (size, focused, color) => {
                    return (
                      <Image style={{width: 30, height: 30}} source={imct} />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      )}
    </SafeAreaView>
  );
}

export default HomeTabs;
const styles = StyleSheet.create({
  imgflex: {width: 500, height: 800, alignItems: 'stretch'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  login: {
    fontSize: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 0,
    height: 400,
  },

  ActivityIndicator: {height: 400, backgroundcolor: 'red'},
});
