import * as React from 'react';
import {Button, View, Text, StyleSheet, Alert, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
 
export default class ChangePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: '',
      loading: true,
      UserEmail: '',
      UserName: '',
      UserPassword: '',
      UserAge: 0,
      UserAddress: '',
      errorText: '',
      isRegisterSuccess: false,
      results: [],
    };
  }

  componentDidMount() {
    Axios('http://10.0.2.2:5221/api/mplans/').then(res => {
      this.setState(
        {
          dataSource: res.data,
        },
        () => {
          ds = this.state.dataSource;
          this.setState({results: ds}); //set data to output
        },
      ); //setstate
    }); //top then
  } //didamoutny

  changePlan = () => {
    Alert.alert ("the plan has been changed")
  };

  render() {
    return this.state.results.map(data => {
      return (

        <SafeAreaView style={[styles.container, {width: 400}]}>

             <View style={{ flex: 1, flexDirection: "row" }}>

             <View style={{ flex: 1, flexDirection: "column", alignItems:'center', top:15}}>

             <Text style={styles.itm}>Bill Amount: {data.billAmt}</Text>

             <Button title="Submit" onPress={this.changePlan} style={{width:100,alignItems:'stretch'}}></Button>

             </View>
             </View>
             <View style={{ flex: 1, flexDirection: "row", top:0 }}>
              <Text style={styles.itm}>Pay Due Date: {data.payduedate}</Text>
              </View> 

              <View style={{ flex: 1, flexDirection: "row", top:0 }}>
              <Text style={styles.itm}>Plan Name: {data.planName}</Text>
             </View>

           

          </SafeAreaView>


      
      
      );
    }); // return
  } //render
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 20,
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
    width: 600,
    height: 30,
    backgroundColor: 'red',
    marginleft: 300,
    marginRight: 10,
    alignItems: 'stretch',
  },

  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    flex:0.5, //why this doesnt work???
   
    padding: 10,
    backgroundColor: 'skyblue',
    flexGrow: 1,
    flexShrink: 0,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  itm: {alignSelf: 'stretch', fontWeight: 'bold', color: 'blue', fontSize: 14},
  column1: {borderRadius: 6, height:140},
  column2: {borderRadius: 6, height:140},
});
