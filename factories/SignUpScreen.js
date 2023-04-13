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
  SafeAreaView,
  Button,
  Platform,
  Linking,
  Alert,
  Modal,
} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import imy from '../assets/aio1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import LoginScreen from './LoginScreen';
import Loader from './Loader';





export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: '',
      loading: true,
      UserEmail: '',
      UserName: '',
      UserPassword: '',
      UserAge: 0,
      UserAddress: '',
      errorText: '',
      isvalid: false,
      nav: null,
    };
  }

  componentDidMount() {
    this.setState({nav: this.props.navigation});
    //console.log(this.props.navigation)
  }

  setUserid = () => {
    AsyncStorage.setItem('User_Id', JSON.stringify('addone'));
  };

  getuserid = () => {
    AsyncStorage.getItem('User_Id').then(IdinStorage => {
      id = IdinStorage ? IdinStorage : '';
      return id;
    });
  };

  handleSubmitButton = () => {
    const iosUrl = 'http://localhost:5000';
    const androidUrl = 'http://10.0.2.2:5221/api/logins';
    const url0 = Platform.OS === 'ios' ? iosUrl : androidUrl;

    return Axios(url0)
      .then(response => {
        this.setState(
          {
            isLoading: false,
            dataSource: response.data.movies,
            ds: response.data.movies,
          },
          function () {
            ds = this.state.dataSource;
            let i = 0;
            ds.forEach(element => {
              i++;
              result =
                element.id + ' ' + element.title + ' ' + element.releaseYear;
              console.log(result);
            }); // loop data to verify that this data is coming

            if (i !== 0) {
              AsyncStorage.setItem('isSignUp', JSON.stringify('true'));
              AsyncStorage.getItem('isSignUp').then(IdinStorage => {
                id = IdinStorage ? IdinStorage : '';
                console.log(id);
              }); //set data in storage local //insert data to database!!!
            }
          },
        );
      })
      .catch(err => {
        console.error(err);
      });
  };




  openexternalLogin = async () => {
    const url = 'https://google.com';
    try {
      await Linking.openURL(url);
    } catch (err) {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  openLogin = () => this.props.navigation.navigate('Login', {name: 'Login'});

  render() {

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightblue'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userName => this.setState({UserName: userName})}
                underlineColorAndroid="#f000"
                placeholder="Enter Your phone number"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                keyboardType="numeric"
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
                keyboardType="numeric"
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
                keyboardType="numeric"
                secureTextEntry={true}
                // onSubmitEditing={() =>
                //   ageInputRef.current && ageInputRef.current.focus()
                // }
                blurOnSubmit={false}
              />
            </View>
          </KeyboardAvoidingView>

          <View style={{margin: 30}}>
            <Button title="Sign Up" onPress={this.handleSubmitButton} />

            <Text style={{alignSelf: 'flex-end'}}>
              Already have an Account?
              <Text onPress={this.openLogin} style={{color: 'blue'}}>
                Log In
              </Text>{' '}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
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
