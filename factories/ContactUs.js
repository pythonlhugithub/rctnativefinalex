import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Axios from 'axios'
export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedValue: '', txtNote: ''};
  }

  componentDidMount() {}

  handleSubmitButton = () => {
    console.log('clicked');
  };

  onChangeTxtNote = value => {
    this.setState({txtNote: value})
  }

  submitCont=(e)=>{
    e.preventDefault(); //important, or all categories are inserted
    var data = {
      id: 0,
      category: this.state.selectedValue,
      explanation: this.state.txtNote,
    };

    if (!this.state.selectedValue.trim()) {
      alert('Please select a category first');
      return;
    };
    if(!this.state.txtNote.trim()){
      alert('Please enter some comments before submit');
      return;
    }
    Axios({
      url: 'http://10.0.2.2:5221/api/issues',
      method: "POST",
      data: data
    }).then(()=>{
      alert('submit successfully')
      this.setState({selectedValue:''})
      this.setState({txtNote:''})
    })
  };

  render() {
    const {selectedValue, txtNote} = this.state;
    return (
        <View
           selectedstyle={{
                height: 280,
                backgroundColor: '#34aeeb',
                alignItems: 'stretch',
        }}>
        <Text style={{fontWeight:'bold', margin: 20,fontSize:20}}>Feed Back</Text>
        <Text style={{margin: 20}}>please select a category and put and submit comments for your feedback</Text>
         <Picker selectedValue={this.state.selectedValue}
        style={{ height: 50, width: 300, margin: 5 }}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}
      >
        <Picker.Item label="-select a value-" value="" />
        <Picker.Item label="Feed back" value="feedback" />
        <Picker.Item label="Internet access" value="internetaccess" />
        <Picker.Item label="Value added service" value="valueaddedservice" />
        <Picker.Item label="Port number" value="portnum" />
        <Picker.Item label="Roaming" value="roaming" />
        <Picker.Item label="General" value="general" />
      </Picker>
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
    );
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
