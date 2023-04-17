import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from 'react-native'
const Drawer=createDrawerNavigator();

export default class Drawjs extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
<NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Hkk" component={HkkOCmponent} ></Drawer.Screen>
        <Drawer.Screen name="Hky" component={HkkOCmponent} ></Drawer.Screen>
    </Drawer.Navigator>
</NavigationContainer>
        )
    }

};

function HkkOCmponent({navigaiton}){
   return (
    <View>
        <Text>Hkk screen</Text>
    </View>
   )
};
function HkyOCmponent({navigaiton}){
    return (
     <View>
         <Text>Hky screen</Text>
     </View>
    )
 };
 