import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { getAllCoins, HomeActions } from "./home.actions"
import { Users } from '../UsersView/Users';

interface ComponentState {
    userSelected: string[]
}

interface ComponentProps {
    userCollection: ["Bruno", "Adi", "Adam"]
}

export class Home extends Component<ComponentProps, ComponentState> {

    constructor(props: any, context: any){
        super(props, context)
        this.state = {
            userSelected : []
        }
    }

    userChangeEvent = (users: string) => {
        const index = this.state.userSelected.indexOf(users, 0);
        if (index > -1){
            this.setState({userSelected: this.state.userSelected.filter(x => x !== users)})    
        }else{
            this.setState({userSelected: this.state.userSelected.concat(users)})
        }
        
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


