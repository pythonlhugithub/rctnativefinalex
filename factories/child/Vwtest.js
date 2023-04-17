import React from "react";
import {Text, View, TextInput, Button, Keyboard,TouchableHighlight, TouchableWithoutFeedback,StyleSheet, KeyboardAvoidingView} from 'react-native'

export default class Vwtest extends React.Component{
    constructor(){
        super();
        this.state={txtNote: ''}
    }
    onChangeTxtNote=(value)=>{
        this.setState({txtNote: value})
    }
render(){
    const{txtNote}=this.state
    return (
<TouchableHighlight>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
        selectedstyle={{
             height: 280,
             backgroundColor: '#34aeeb',
             alignItems: 'stretch',
     }}>



     <Text style={{fontWeight:'bold', margin: 20,fontSize:20}}>Feed Back</Text>
     <Text style={{margin: 20}}>please select a category and put and submit comments for your feedback</Text>
    
    
   <TextInput
         style={styles.txtnote}
         value={txtNote}
         onChangeText={this.onChangeTxtNote}
         placeholder="txtNote"
         maxLength={4000}
         textAlignVertical="top"
         onBlur={() => {
           if (!this.state.txtNote.trim()) {
             alert('enter your content here');
             return;
           } else {
             console.log('validated');
           }
         }}
       />


       <Button title="submit" onPress={this.submitCont}></Button>
   </View>

 
   </TouchableWithoutFeedback>
   </TouchableHighlight>

    )
}
}



const styles = StyleSheet.create({
    txtnote: {
      width:'100%', 
      height: '50%', 
      alignItems:'stretch', 
      justifyContent:'center', 
      borderWidth:1, 
      borderColor:'gold'
    },
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
  });

  
