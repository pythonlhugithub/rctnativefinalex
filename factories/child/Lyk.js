// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Placeholder = ({ text }) => (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>{text}</Text>
//   </View>
// );

//  class Home extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'Home!',
//   };

//   render() {
//     return <Placeholder text="Home Component!" />;
//   }
// }

// class Product extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'Products!',
//   };

//   render() {
//     return <Placeholder text="Products Component!" />;
//   }
// }

// let Stack = createNativeStackNavigator();
// let Tab = createBottomTabNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// };

// const ProductStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Product" component={Product} />
//     </Stack.Navigator>
//   );
// };

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="HomeStack" component={HomeStack} />
//       <Tab.Screen name="ProductStack" component={ProductStack} />
//     </Tab.Navigator>
//   );
// }


// const Aplp = () => {
//   return (
//     <NavigationContainer>
//       <MyTabs/>
//     </NavigationContainer>
//   );
// };
 
// export default Aplp;

// // import React, {Component} from 'react';
// // import {SectionList, StyleSheet, Text, View} from 'react-native';

// // export default class Aplp extends Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <SectionList sections={myList} renderItem={renderMyItems} />
// //       </View>
// //     );  // blank screen same key
// //   }
// // }

// // const myList = [
// //   {
// //     category: 'Mobiles',
// //     data: ['Oneplus 5T', 'iPhone X', 'Moto G5 plus'],
// //   },
// //   {
// //     category: 'Laptops',
// //     data: ['Dell Inspiron', 'Acer Predator 300'],
//   },
// ];
// const renderMyItems = ({data}) => {
//   return <Text style={styles.item}>{data}</Text>;
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// // import React, { Component } from 'react'
// // import { StatusBar } from 'react-native'
// // import { Text, View, TextInput, StyleSheet } from 'react-native'
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export default class Aplp extends React.Component {
// //     constructor(){
// //         super();
// //           this.state = {
// //       'alterEgo': ''
// //    }
// //     }

// //    componentDidMount = () => AsyncStorage.getItem('alterEgo').then((value) => this.setState({ 'alterEgo': value }))

// //    setalterEgo = (value) => {
// //       AsyncStorage.setItem('alterEgo', value);
// //       this.setState({ 'alterEgo': value });
// //    }
// //    render() {
// //       return (
// //          <View style = {styles.container}>
// //             <TextInput style = {styles.textInput} autoCapitalize = 'none'
// //             onChangeText = {this.setalterEgo}/>
// //             <Text>
// //                {this.state.alterEgo}
// //             </Text>
// //          </View>
// //       )
// //    }
// // }

// // const styles = StyleSheet.create ({
// //     container: {
// //        flex: 1,
// //        alignItems: 'center',
// //        marginTop: 50
// //     },
// //     textInput: {
// //        margin: 5,
// //        height: 50,
// //        width:100,
// //        borderWidth: 1,
// //        backgroundColor: '#7685ed'
// //     }
// //  })
