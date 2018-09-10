import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { connect, Dispatch } from "react-redux"
import { getAllCoins, HomeActions } from "./home.actions"
import { Users } from '../Users/Users';


export class Home extends Component {

    constructor(props: any){
        super(props)
        this.state = { UserSelected : ''}
    }

    selectUser(User: string){
        this.setState({ userSelected : User})
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users children={["Bruno", "Adi", "Adam"]} ></Users>
                <Text>{this.state}</Text>
            </View>
        )
    }
}


