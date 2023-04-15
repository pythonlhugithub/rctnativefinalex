import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import LogOutScreen from './Logout';
const Stack = createNativeStackNavigator();
export default class SinupNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      nav: '',
    };
  }

  componentDidMount() {
    this.setState({nav: this.props.navigaiton});
   // console.log(this.props.navigation);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Sign Up"
            component={SignUpScreen}
            options={{
              title: 'Sign Up',
              headerTitleStyle: {
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#03adfc',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerTitleStyle: {
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#03adfc',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerTitleStyle: {
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#03adfc',
              },
            }}
          />
           <Stack.Screen
            name="Logout"
            component={LogOutScreen}
            options={{
              title: 'Logout',
              headerTitleStyle: {
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#03adfc',
              },
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
