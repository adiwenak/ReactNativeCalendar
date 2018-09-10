import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { connect, Dispatch } from "react-redux"
import { getAllCoins, HomeActions } from "./home.actions"
import { Users } from '../Users/Users';


export class Home extends Component {

    constructor(props: any, context: any){
        super(props, context)
        this.state = { UserSelected : 'Bruno'}
    }

    handleDrawer = () => {
        // Access the handleToggle function of the drawer reference
        this.refs.customUserReference.handleToggle()
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users ref="customUserReference" children={["Bruno", "Adi", "Adam"]} ></Users>
                <Text>Teste: {this.refs.customUserReference}</Text>
            </View>
        )
    }
}


