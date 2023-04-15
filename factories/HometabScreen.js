import * as React from 'react';
import {
  SafeAreaView,
  View,
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
import SinupNav from './Singinupnav';

const Tab = createBottomTabNavigator();

export default class HomeTabScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {animatingl: true, flag: false};
  } 
  componentDidMount(){
    this.animatetimeout(); //2 s animate disabled
    this.setUsrid(); //execute to insert idto storage
    this.getFlag(); //get flag to decide the following stesp
  }
  removeItem = async () => {
    await AsyncStorage.clear();
  };
  setUsrid = () => {
    this.removeItem(); //clean storage
    AsyncStorage.setItem('User_Id', '1111'); //add userid
  };

  getFlag = () => {
    AsyncStorage.getItem('User_Id').then(
      res =>{
              if (res == null) 
            {
              this.setState({flag : false});
            }else{
              this.setState({flag : true});
            }
      });
  };
      
  animatetimeout=()=>{
    setTimeout(() => {
      this.setState({animatingl: false});
    }, 2000);
  }

render(){
  const {animatingl, flag} = this.state;
  console.warn(flag); //flag=true, show home page, or show sign up
  return (
    (flag?(
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
                  headerTitleStyle: {
                    color: 'white',
                  },
                  headerStyle: {
                    backgroundColor: '#03adfc',
                  },
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
                  headerTitleStyle: {
                    color: 'white',
                  },
                  headerStyle: {
                    backgroundColor: '#03adfc',
                  },
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
                  headerTitleStyle: {
                    color: 'white',
                  },
                  headerStyle: {
                    backgroundColor: '#03adfc',
                  },
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
    ):(
      (animatingl ? (
        <View style={styles.container}>
          <ActivityIndicator
            animating={animatingl}
            color="white"
            style={styles.activityIndicator}
          />
          <Image source={imy} style={styles.imgflex} />
        </View>
        
      ) : (<SinupNav />))
  ))
  ); //return
  } //render
}

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
