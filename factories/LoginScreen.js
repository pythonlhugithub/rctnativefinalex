import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: '',
      loading: true,
      errorText: '',
      pin: '',
      isRegisterSuccess: false,
      ispinexist: false,
    };
  }

  componentDidMount() {  }

  setUserid = () => {
    console.log(this.state.pin)
    AsyncStorage.setItem('User_Id', JSON.stringify(this.state.pin));
  };

  openSignup = () =>
    this.props.navigation.navigate('Sign Up', {name: 'Sign Up'});

  openHometabs = () =>
  {
    this.props.navigation.navigate('Home', {name: 'Home'})
  }
    
  onChangePin = value => {
    this.setState({pin: value});
  };

  handleSubmitButton = () => {
    if (!this.state.pin.trim()) {
      alert('enter a pin');
      return;
    }
    //console.log('https://10.0.2.2:5221/api/Logins/' + this.state.pin);
    Axios('http://10.0.2.2:5221/api/Logins/' + this.state.pin).then(res => {
        if (res.data.fourDgit == this.state.pin) {
          this.setUserid();
          this.openHometabs();
          this.setState({pin: ''});
      }
      }).catch((err)=>{
        this.openSignup();
        this.setState({pin:''});
        console.log(err);
      }
      );
 };
  render() {
    const {pin} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            value={pin}
            onChangeText={this.onChangePin}
            placeholder="Pin"
            keyboardType="numeric"
            maxLength={4}
            onBlur={() => {
              if (!this.state.pin.trim()) {
                alert('enter a pin');
                return;
              } else {
                console.log('validated');
              }
            }}
          />
        </View>
        <View style={{marginTop: 150, flex: 1}}>
          <Button
            title="Log In"
            style={styles.buttonStyle}
            onPress={this.handleSubmitButton}
          />
        </View>
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
    marginTop: 140,
    height: 80,
  },
});
