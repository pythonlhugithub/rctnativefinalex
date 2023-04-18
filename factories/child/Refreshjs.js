import * as React from 'react'
import {RefreshControl, View, Text, Button,StyleSheet, FlatList} from 'react-native'
export default class Refreshjs extends React.Component{
    constructor(){
        super();
   
    this.state={
        refreshing:false,
        data: [{id:4, framework:'wood'}, {id:5, framework:'Food'},{id:6, framework:'water'}]
    }
}

delay=(timeout)=>
{
    return new Promise(resolve=>this.setState({resolve:timeout}))
}

onRefreh=()=>{
    
}


}
