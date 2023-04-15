import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
export default class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {User_Id: ''};
  };

  cleanUsrid = () => {
    this.removeItem(); //clean storage
    AsyncStorage.setItem('User_Id', ''); // reset if it does not work.
    this.openSignup();
  };

  removeItem = async () => {
    await AsyncStorage.clear();
  };

  openSignup = () =>
    this.props.navigation.navigate('Sign Up', {name: 'Sign Up'});
  
  render() {
    const {User_Id} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'lightblue'}}>
        <View style={{marginTop: 150, flex: 1}}>
          <Button
            title="Log Out"
            style={styles.buttonStyle}
            onPress={this.cleanUsrid}
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
