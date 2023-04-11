import React from 'react'
import {
  Text, 
  View, 
  StyleSheet, 
  Image, 
  ActivityIndicator, 
  SafeAreaView 
} from 'react-native'

import imy from '../assets/aio1.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'


export default class SplashScreen extends React.Component {
  constructor(navigation) {
    super()
    this.state = { 
      animating: true, 
      User_Id:''
    }; 
  };

  componentDidMount() {
    this.setUserid;
  };

  setUserid = () => 
  {
    AsyncStorage.setItem('User_Id', JSON.stringify('addone'));
  }

  getuserid= () =>{
    AsyncStorage.getItem('User_Id').then((IdinStorage)=>{
     id= IdinStorage?IdinStorage:'';
     return id;
    });
   return id;
   };

  removeItem = async()=>{ await AsyncStorage.clear();}

  render() {
       setTimeout(()=>{
       this.setState({animating:false})
     }, 2000);
      return (
       (this.getuserid='addone'?(
            <SafeAreaView style={styles.container}>
             <ActivityIndicator
            animating={this.state.animating}
            color="white"
            style={styles.activityIndicator}
          />
          {(this.state.animating?( 
          <View style={styles.container}>
                 <Image source={imy} style={{width:500, height: 800, alignItems:'stretch'}} />
                {/* <Loader /> */}
         </View>
           ):null)}
         {(!this.state.animating?(  // this is the user id exist landing page
            <View style={styles.login}>
                 <Text>this is the existing user id landing page</Text>
           
             </View> 
            
          ):null)}
         </SafeAreaView>):(<SafeAreaView><View><Text>this is the login page</Text></View></SafeAreaView>)) 
  
  );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  login: 
  {
    fontSize: 20,
    alignItems:'stretch',
    justifyContent:'center',
    margin: 0,
    height: 400,
   },

  ActivityIndicator: {height: 400, backgroundcolor: 'red'}
});
