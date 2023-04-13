import * as React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

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

  handleSubmitButton = () => {};

  render() {
    return this.state.results.map(data => {
      return (
        <View style={[styles.container, {width: 400}]}>
          <View style={styles.column1}>
            <View style={styles.item}>
              <Text style={styles.itm}>Bill Amount: {data.billAmt}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itm}>Bill Type: {data.billType}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itm}>Pay Due Date: {data.payduedate}</Text>
            </View>
          </View>
          <View style={styles.column2}>
            <View style={styles.item}>
            <Text style={styles.itm}>Plan Name: {data.planName}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itm}>User Id: {data.userId}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.itm}>{}</Text>
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
    borderWidth:2,
    borderColor: 'white',
  },
  itm:{alignSelf:'center', fontWeight: 'bold', color:'yellow', fontSize:14},
  column1: {borderRadius: 6},
  column2: {borderRadius: 6},
});
 