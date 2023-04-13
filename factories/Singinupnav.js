import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'

export default class SinupNav extends React.Component{
constructor(props){
    super(props);
    this.state={
        userid:'',
        nav: '',
    };
    
};

componentDidMount(){
      this.setState({nav: this.props.navigaiton})
        console.log(this.props.nav);

}

    render(){

      
        Stack=createNativeStackNavigator();

        return (
             <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Sign Up" component={SignUpScreen}></Stack.Screen>
                    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                </Stack.Navigator>
             </NavigationContainer>
        )
    }
}