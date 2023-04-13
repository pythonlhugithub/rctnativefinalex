import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

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
    console.log(this.props.nav);
  }

  render() {
    Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
