import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { getAllCoins, HomeActions } from "./home.actions"
import { Users } from '../UsersView/Users';

interface ComponentState {
    userSelected: string[]
}

interface ComponentProps {
    userCollection: string
}

export class Home extends Component<ComponentProps, ComponentState> {

    constructor(props: any, context: any){
        super(props, context)
        this.state = {
            userSelected : [""]
        }
    }

    handleDrawer = () => {
        // Access the handleToggle function of the drawer reference
    }

    userChangeEvent = (lsUsers: string[]) => {
        this.setState({userSelected: lsUsers})
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users userCollection={["Bruno", "Adi", "Adam"]} userChangeEvent={this.userChangeEvent}/>
                <Text>Teste: {this.state.userSelected}</Text>    
            </View>
        )
    }
}


