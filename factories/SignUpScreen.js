import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: '',
      loading: true,
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

    var data = {
      tenDigit: this.state.phoneno,
      fourDgit: this.state.pin,
      userName: this.state.confirmpin,
      password: 'pswd'
   };

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
              <TextInput
                style={styles.inputStyle}
                value={phoneno}
                onChangeText={this.onChangePhone}
                placeholder="Phone Number"
                keyboardType="numeric"
                maxLength={10}
                onBlur={() => {
                  if (!this.state.phoneno.trim()) {
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
                onBlur={() => {  //why disabled this is because openlogin will see the empty onblur
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
