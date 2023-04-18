import React from 'react'
import {Button, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'


const Login=({navigation})=>{
    return <>
    <Text>Login Screen</Text>
    <Button onPress={()=>navigation.navigate("DrawerHome", {screen: "Tabs"})} title="Go to Home"></Button>
    </>
}

const Home=()=><Text>Home Screen</Text>
const GoHome=()=><Text>go back Screen</Text>
const Stack=createNativeStackNavigator();

const StackNav=()=>{  // navigator
    return <Stack.Navigator>
        <Stack.Screen component={Home} name={"Landing"} options={{headershown:false}}></Stack.Screen> 
        <Stack.Screen component={GoHome} name={"back"} options={{headershown:false}}></Stack.Screen> 
    </Stack.Navigator>
}

const Tab1=()=><Text>Tab 1 screen</Text>
const Tab2=()=><Text>Tab 2 screen</Text>
const Tab=createBottomTabNavigator();

const TabNav=()=>{  //navigator
    return <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={"Tab1"} component={Tab1}></Tab.Screen>
        <Tab.Screen name={"Tab2"} component={Tab2}></Tab.Screen>
    </Tab.Navigator>
}


const Drawer=createDrawerNavigator();
const DrawerNav=()=>{
    return <Drawer.Navigator>
        <Drawer.Screen component={StackNav} name="Home"></Drawer.Screen>
        <Drawer.Screen component={TabNav} name="Tabs"></Drawer.Screen>
    </Drawer.Navigator>
}


const NestNav=()=>{

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={Login} name={"login"}></Stack.Screen>
            <Stack.Screen component={DrawerNav} name={"DrawerHome"} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}
export default NestNav;