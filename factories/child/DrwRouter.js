import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

 

export default class DrwRouter extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
<NavigationContainer>
    <DrwRouter />
</NavigationContainer>
        )
    }

}