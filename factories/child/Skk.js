import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
 

const Stack = createNativeStackNavigator();

// const clkk=()=>{
//   console.log('clicked touchable')
// }


// function Login ({navigation}){
//   return(
//     <View>
//       <Text>Login screen</Text>
//       {/* <Button
//         title="Go to Home"
//         onpPress={() => {
//           navigation.navigate('DrawerHome', {screen: "Tabs"});
//         }}
//       />
//       <TouchableOpacity onPress={clkk}>
// <Text>Clkk</Text>
//       </TouchableOpacity> */}
//     </View>
//   )
// }



// const Home=()=><Text>Home Screen</Text>;

// const StackNav=()=>{
//     return (
//         <Stack.Navigator>
//             <Stack.screen component={Home} name={"landing"} options={{headerShown: false}}></Stack.screen>
//         </Stack.Navigator>
//     )
// }

// const tab1=()=><Text>Tab1 Screen</Text>;
// const tab2=()=><Text>Tab2 Screen</Text>;

// const Tab=createBottomTabNavigator();

// const TabNav=()=>{
//     return (
//         <Tab.Navigator screenOptions={{headerShown: false}}>
//             <Tab.Screen name={"Tab1"} component={tab1}></Tab.Screen>
//             <Tab.Screen name={"Tab2"} component={tab2}></Tab.Screen>
//         </Tab.Navigator>
//     )
// }

// const Drawer=createDrawerNavigator();

// const DrawNav=()=>{
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen component={StackNav} name="Home" ></Drawer.Screen>
//             <Drawer.Screen component={TabNav} name="Tabs" ></Drawer.Screen>
      
//         </Drawer.Navigator>
//     )
// }


// export default class Skk extends React.Component{
//   render(){
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen component={Login} name="Login" /> 
//           <Stack.Screen component={DrawNav} name="DrawerHome" options={{headerShown: false}} />

          
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }

export default class Drawjs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Hkk" component={HkkOCmponent} />
          <Stack.Screen name="Hky" component={HkyOCmponent} />
          <Stack.Screen name="Hoo" component={HooOCmponent} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function HkkOCmponent({navigation}) {
  return (
    <View>
      <Text>Hkk screen</Text>
      <Button
        title="Go Hky"
        onpPress={() => {
          navigation.navigate('HkyOCmponent');
        }}
      />
    </View>
  );
}
function HkyOCmponent({navigation}) {
  return (
    <View>
      <Text>Hky screen</Text>
      <Button
        title="Go Hoo"
        onpPress={() => {
          navigation.push('HooOCmponent');
        }}
      />
    </View>
  );
}

function HooOCmponent({navigation}) {
  return (
    <View>
      <Text>Hoo screen</Text>
      <Button
        title="Go Hkx"
        onpPress={() => {
          navigation.navigate('HkkOCmponent');
        }}
      />
    </View>
  );
}
