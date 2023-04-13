import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert
} from 'react-native';
import Axios from 'axios';

export default class Crudjs extends React.Component {
  constructor() {
    super();
    this.state = {phoneno: '', pin: '', confirmpin: '', isvisible: true };
  };

  setVisible= ()=>{this.setState({isvisible: false})};

  handleVisibleModal = () => {
    this.setState({isvisible: false})
  };
  onChangePhone = (value) => {

    if (!value.trim()) {
        alert('Please Enter phone number');
        return;
      }

    this.setState({phoneno: value});

    console.log('click');

  };
  onChangePin = (value) => {
     this.setState({pin: value});
  };
  onChangecfmpin = (value) => {
    this.setState({confirmpin: value});
  };
  saveData = () => {
    // console.log(this.state.phoneno);
    // console.log(this.state.pin);
    // console.log(this.state.confirmpin);

    if (!this.state.phoneno.trim()) {
        alert('Please Enter Phone Number');
        return;
      }

  if (!this.state.pin.trim()) {
        alert('Please Enter Pin');
        return;
      }
      
      if (!this.state.confirmpin.trim()) {
        alert('Please Enter Pin to confirm');
        return;
      }

        if (this.state.confirmpin.trim()!=this.state.pin.trim()) {
        alert('Pin is not matched');
        return;
      }

   var data={
    "tenDigit": this.state.phoneno,
    "fourDgit": this.state.pin,
    "userName": this.state.confirmpin,
    "password":  "pswd"
   }
     Axios({
    url:'http://10.0.2.2:5221/api/logins',
    method: "POST",
    data: data
   }).then(()=>{
    console.log('submitted')
    this.setState({phoneno:'',pin: '', confirmpin: '', isvisible: false});
})
};

  render() {
    const {phoneno, pin, confirmpin} = this.state;
    return (
      
        <Modal visible={this.state.isvisible} style={{width:300,height:100, borderColor:'red', backgroundColor:'skyblue', borderRadius:10}}>
        <TouchableOpacity onPress={this.handleVisibleModal}>
          <Text style={styles.txt_close}>Close</Text>
        </TouchableOpacity>
        <Text>{phoneno},</Text>
        <Text>{pin},</Text>
        <Text>{confirmpin}</Text>
        <TextInput
          style={styles.text_input}
          value={phoneno}
          onChangeText={this.onChangePhone}
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          onBlur={()=> {
            if(!this.state.phoneno.trim()) {
               alert('enter a phone number');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <TextInput
          style={styles.text_input}
          value={pin}
          onChangeText={this.onChangePin}
          placeholder="Pin"
          keyboardType="numeric"
          maxLength={4}
          onBlur={()=> {
            if(!this.state.pin.trim()) {
               alert('enter a pin');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <TextInput
          style={styles.text_input}
          value={confirmpin}
          onChangeText={this.onChangecfmpin}
          placeholder="Confirm Pin"
          keyboardType="numeric"
          maxLength={4}
          onBlur={()=> {
            if(!this.state.confirmpin.trim()){
                alert('pin is not matched');
                return;
            }
            else if(this.state.confirmpin!=this.state.pin) {
               alert('pin is not matched');
               return;
            } else {
               console.log('validated');
            }
          }}
        />
        <Button
          title="Save New"
          onPress={this.saveData}
          style={styles.btnstyle}
        />
        </Modal>
    ); //topreturn
  } //render
} //componn
const styles = StyleSheet.create({
  txt_close: {color: 'gray'},
  text_input: {width: 400},
  btnstyle: {color: 'green'},
});
