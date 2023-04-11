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
} from 'react-native';

import imy from '../assets/aio1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from './Loader';

export default class SignUpScreen extends React.Component {
  constructor(navigation) {
    super();
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

  handleSubmitButton = () => {
    console.log('clicked');
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
          <View style={{alignItems: 'center'}}>
            <Image
              source={imy}
              style={{
                width: 450,
                height: 200,
                margin: 0,
              }}
            />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <Text
                style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold'}}>
                Sign up
              </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userName => this.setState({UserName: userName})}
                underlineColorAndroid="#f000"
                placeholder="Enter Your phone number"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   emailInputRef.current && emailInputRef.current.focus()
                // }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userEmail =>
                  this.setState({UserEmail: userEmail})
                }
                underlineColorAndroid="#f000"
                placeholder="Enter PIN"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                //   ref={emailInputRef}
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userPassword =>
                  this.setState({UserPassword: userPassword})
                }
                underlineColorAndroid="#f000"
                placeholder="Confirm PIN"
                placeholderTextColor="#8b9cb5"
                // ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                // onSubmitEditing={() =>
                //   ageInputRef.current && ageInputRef.current.focus()
                // }
                blurOnSubmit={false}
              />
            </View>

            <Button
              title="Sign Up"
              style={styles.buttonStyle}
              onPress={this.handleSubmitButton}
            />
            
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
    alignItems: 'center',
  },

  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
