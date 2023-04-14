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
      phoneno: '', 
      pin: '', 
      confirmpin: '', 
      isvisible: true 
    };
  }

  componentDidMount() {
    this.setState({nav: this.props.navigation});  //important
    //console.log(this.props.navigation)

    this.setState({phoneno: ''}); 
    this.setState({pin: ''}); 
    this.setState({confirmpin: ''}); 
 
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

  // handleSubmitButton = () => {
  //   const iosUrl = 'http://localhost:5000';
  //   const androidUrl = 'http://10.0.2.2:5221/api/logins';
  //   const url0 = Platform.OS === 'ios' ? iosUrl : androidUrl;

  //   return Axios(url0)
  //     .then(response => {
  //       this.setState(
  //         {
  //           isLoading: false,
  //           dataSource: response.data.movies,
  //           ds: response.data.movies,
  //         },
  //         function () {
  //           ds = this.state.dataSource;
  //           let i = 0;
  //           ds.forEach(element => {
  //             i++;
  //             result =
  //               element.id + ' ' + element.title + ' ' + element.releaseYear;
  //             console.log(result);
  //           }); // loop data to verify that this data is coming

  //           if (i !== 0) {
  //             AsyncStorage.setItem('isSignUp', JSON.stringify('true'));
  //             AsyncStorage.getItem('isSignUp').then(IdinStorage => {
  //               id = IdinStorage ? IdinStorage : '';
  //               console.log(id);
  //             }); //set data in storage local //insert data to database!!!
  //           }
  //         },
  //       );
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };


  // openexternalLogin = async () => {
  //   const url = 'https://google.com';
  //   try {
  //     await Linking.openURL(url);
  //   } catch (err) {
  //     Alert.alert(`Don't know how to open this URL: ${url}`);
  //   }
  // };

  openLogin = () => this.props.navigation.navigate('Login', {name: 'Login'});

  setVisible= ()=>{this.setState({isvisible: false})};

  handleVisibleModal = () => {
    this.setState({isvisible: false})
  };
  onChangePhone = (value) => {
    this.setState({phoneno: value});
  };
  onChangePin = (value) => {
     this.setState({pin: value});
  };
  onChangecfmpin = (value) => {
    this.setState({confirmpin: value});
  };
  saveData = () => {
    // console.log(this.state.phoneno);
    // console.log(this.state.pin);
    // console.log(this.state.confirmpin);
    if (!this.state.phoneno.trim()) {
        alert('Please Enter Phone Number');
        return;
      }

  if (!this.state.pin.trim()) {
        alert('Please Enter Pin');
        return;
      }
      
      if (!this.state.confirmpin.trim()) {
        alert('Please Enter Pin to confirm');
        return;
      }

        if (this.state.confirmpin.trim()!=this.state.pin.trim()) {
        alert('Pin is not matched');
        return;
      }

   var data={
    "tenDigit": this.state.phoneno,
    "fourDgit": this.state.pin,
    "userName": this.state.confirmpin,
    "password":  "pswd"
   }


  Axios({
    url:'http://10.0.2.2:5221/api/logins',
    method: "POST",
    data: data
   }).then(()=>{
    console.log('submitted')
    this.setState({phoneno:'',pin: '', confirmpin: '', isvisible: false});
    this.openLogin();
})


};

  render() {
    const {phoneno, pin, confirmpin} = this.state;
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
{/* 
            <Text>{phoneno},</Text>
        <Text>{pin},</Text>
        <Text>{confirmpin}</Text> */}
        <TextInput
           style={styles.inputStyle}
          value={phoneno}
          onChangeText={this.onChangePhone}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          onBlur={()=> {
            if(!this.state.phoneno.trim()) {
               alert('enter a phone number');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <TextInput
          style={styles.inputStyle}
          value={pin}
          onChangeText={this.onChangePin}
          placeholder="Pin"
          keyboardType="numeric"
          maxLength={4}
          onBlur={()=> {
            if(!this.state.pin.trim()) {
               alert('enter a pin');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <TextInput
          style={styles.inputStyle}
          value={confirmpin}
          onChangeText={this.onChangecfmpin}
          placeholder="Confirm Pin"
          keyboardType="numeric"
          maxLength={4}
          onBlur={()=> {  //why disabled this is because openlogin will see the empty onblur
             if(this.state.confirmpin!=this.state.pin) {
               alert('pin is not matched');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <Button
          title="Sign Up"
          onPress={this.saveData}
          style={styles.btnstyle}
        />
            </View> 
          </KeyboardAvoidingView>
          <View style={{margin: 20}}>
                <Text style={{alignSelf: 'flex-end'}}>
                  Already have an Account?
                <Text onPress={this.openLogin} style={{color: 'blue'}}>
                Log In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  txt_close: {color: 'gray'},
  text_input: {width: 400},
  btnstyle: {color: 'green'},
 
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
