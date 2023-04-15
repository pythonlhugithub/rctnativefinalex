import * as React from 'react';
import { FlatList, Modal, Alert, View, Text, StyleSheet, Button} from 'react-native';
import Axios from 'axios';

export default class HomeScreen extends React.Component {
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
      isModalVisible: false,
    };
  }
  componentDidMount() {
    Axios('http://10.0.2.2:5221/api/mplans/1').then(res => {
      this.setState(
        {
          dataSource: res.data,
        },
        () => {
          let ds=[];
          ds.push(this.state.dataSource); //only current data is shown, so push it
          this.setState({results: ds}); //set data to output
        },
      ); //setstate
    }); //top then
  } //didamoutny


  handleModal=()=>{
    Alert.alert('clicked')
  }
  handleSubmitButton = (id) => {
    console.log(id);
    // return (
    //   <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} />
    //   <Button title="button" onPress={this.handleModal} />
    //   <Modal isVisible={this.state.isModalVisible}>
    //     <View style={{ flex: 1 }}>
    //       <Text>Hello!</Text>
    //       <Button title="Hide modal" onPress={this.handleModal} />
    //     </View>
    //   </Modal>
    // </View>
    // )
  };

  render() {
    return this.state.results.map(data => {
      return (
        <View style={[styles.container, {width: 400}]}>
          <View style={styles.column1}>
            <View style={styles.item} >
              <Text style={styles.itm}  onPress={this.handleSubmitButton.bind(this,data.id)}>Bill Amount: {data.billAmt}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itm}>Pay Due Date: {data.payduedate}</Text>
            </View>
          </View>
          <View style={styles.column2}>
            <View style={styles.item}>
              <Text style={styles.itm}>Plan Name: {data.planName}</Text>
            </View>
          </View>
        </View>
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
    flex: 0.5, //why this doesnt work???
    height: 20,
    padding: 10,
    backgroundColor: 'skyblue',
    flexGrow: 1,
    flexShrink: 0,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  itm: {alignSelf: 'center', fontWeight: 'bold', color: 'yellow', fontSize: 14},
  column1: {borderRadius: 6, height:140},
  column2: {borderRadius: 6, height:140},
 
 
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});