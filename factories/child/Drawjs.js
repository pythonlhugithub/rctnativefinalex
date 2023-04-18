import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, Button} from 'react-native'

const Drawer=createDrawerNavigator();

export default class Drawjs extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        

return(
<NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Hkk" component={HkkOCmponent} ></Drawer.Screen>
        <Drawer.Screen name="Hky" component={HkyOCmponent} ></Drawer.Screen>
        <Drawer.Screen name="Hoo" component={HooOCmponent} ></Drawer.Screen>
    </Drawer.Navigator>
</NavigationContainer>
        )
    }

};

function HkkOCmponent({navigation}){
   return (
    <View>
        <Text>Hkk screen</Text>
        <Button title="Go Hky" onpPress={()=>{navigation.navigate("HkyOCmponent")}}></Button>
    </View>
   )
};
function HkyOCmponent({navigation}){
    return (
     <View>
         <Text>Hky screen</Text>
         <Button title="Go Hoo" onpPress={()=>{navigation.push("HooOCmponent")}}></Button>
     </View>
    )
 };
 
 function HooOCmponent({navigation}){
    return (
     <View>
         <Text>Hoo screen</Text>
         <Button title="Go Hkx" onpPress={()=>{navigation.navigate("HkkOCmponent")}}></Button>
     </View>
    )
 };