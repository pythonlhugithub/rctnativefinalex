import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import imy from '../assets/aio1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeTabs from './Hometabxxx';
import LoginScreen from './LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      User_Id: '',
    };
  }

  componentDidMount() {
    this.setUserid;
  }

  setUserid = () => {
    AsyncStorage.setItem('User_Id', JSON.stringify('addone'));
  };

  getuserid = () => {
    AsyncStorage.getItem('User_Id').then(IdinStorage => {
      id = IdinStorage ? IdinStorage : '';
      return id;
    });
    return id;
  };

  removeItem = async () => {
    await AsyncStorage.clear();
  };

  render() {
    setTimeout(() => {
      this.setState({animating: false});
    }, 2000);

    return (

      <SafeAreaView style={styles.container}>
        <ActivityIndicator animating={this.state.animating} color="white" style={styles.activityIndicator}/> 
        {(this.state.animating?
        (<View style={styles.container}>
          <Image source={imy} style={styles.imgflex} />
        </View>):(
          <View style={{alignItems:'stretch',marginBottom:0, width:410, height:700}}>
          <HomeTabs />
          </View>
        ))}   
      </SafeAreaView>

    );
  }
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
