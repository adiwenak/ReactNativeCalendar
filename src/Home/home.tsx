import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { getAllCoins, HomeActions } from "./home.actions"
import { UserModel } from '../UsersView/UserModel';
import { Users } from '../UsersView/Users';
import { styles } from '../UsersView/Users.style';
import { any } from 'prop-types';

interface ComponentState {
    userSelected: UserModel[]
    listUsers: UserModel[]
}

interface ComponentProps {
    
}

export class Home extends Component<ComponentProps, ComponentState> {

    constructor(props: any, context: any){
        super(props, context)
        this.state = {
            userSelected : [],
            listUsers : [new UserModel("Bruno", "powderblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adam", "steelblue", true)]
        }
    }

    userChangeEvent = (users: UserModel) => {
        var containUser = false
        this.state.userSelected.forEach(x => {
            if(x.name.trim == users.name.trim){
                containUser = true
            }
        });
        if (containUser){
            this.setState({userSelected: this.state.userSelected.filter(x => x.name !== users.name)})    
        }else{
            this.setState({userSelected: this.state.userSelected.concat(users)})
        }
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users  userCollection={this.state.listUsers} 
                        userChangeEvent={this.userChangeEvent}/>
            </View>
        )
    }
}


