import React from 'react'
import Axios from 'axios'
import { FlatList, Text, SafeAreaView } from 'react-native';

export default class Axiosjs extends React.Component{
    constructor(){
        super()
        this.state={datas:[]}
    }

    componentDidMount(){
         Axios('https://jsonplaceholder.typicode.com/users').then((res)=>{
            console.log(res.data)
        this.setState({datas: res.data})
    });
    }
   
    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <FlatList style={{flex:1, width: 200, height: 500 }}
                data={this.state.datas}
                renderItem={({itemindatas})=>{
                   return <Text style={{alignItems:'stretch'}}>
                {itemindatas.address}
                    </Text>
                }}
                keyExtractor={({id}, index)=>id+index}
                > 
 
                </FlatList>
            </SafeAreaView>
        )
    }


}