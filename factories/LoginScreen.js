import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import Axios from 'axios';
import imy from '../assets/aio1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from './Loader';

export default class LoginScreen extends React.Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      User_Id: '',
      loading: true,
      UserEmail: '',
      UserName: '',
      UserPassword: '',
      UserAge: 0,
      UserAddress: '',
      errorText: '',
      isRegisterSuccess: false,
    };
  }

  componentDidMount() {}

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

  handleSubmitButton = (pinnumber) => {

  //  var ss=Axios('http://localhost:3000/data/?pinno='+pinnumber);
  //  if(ss===null){
  //   console.log('no successful, try again');
  //  };

  };

  render() {
    //setTimeout(() => {
    // this.setState({loading: false});
    // }, 2000);

    return (
      <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <KeyboardAvoidingView enabled>
            <View
              style={{
                height: 80,
                backgroundColor: '#34aeeb',
                alignItems: 'stretch',
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                  color:'white'
                }}>
                Log In
              </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userName => this.setState({UserName: userName})}
                underlineColorAndroid="#f000"
                placeholder="Enter Your PIN"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="numeric"
                blurOnSubmit={false}
              />
            </View>

            <View style={{marginTop: 150, flex: 1}}>
              <Button
                title="Log In"
                style={styles.buttonStyle}
                onPress={this.handleSubmitButton('hello')}
              />
              <Text>Already have an account? </Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
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
  itemcontainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    fontSize: 20,
  },
  inputStyle: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
  },
  buttonStyle: {
    width: 100,
    height: 30,
    backgroundColor: 'white',
    marginleft: 300,
    marginRight: 10,
    justifyContent: 'center',
  },

  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  SectionStyle: {
    marginTop:140,
    height: 80,
  },
});
