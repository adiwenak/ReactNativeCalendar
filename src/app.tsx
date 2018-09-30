import { Component } from "react"
import * as React from "react"
import { View } from "react-native"
import { UserModel } from './UsersView/UserModel';
import { UserSelection } from './UsersView/UserSelection';

export class App extends Component<any, any> {
	constructor(props: any, context: any){
        super(props, context)
        this.state = {
            userSelected : [],
            listUsers : [new UserModel("Bruno", "powderblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adi", "skyblue"), 
                         new UserModel("Adam", "steelblue")]
        }
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <UserSelection  userCollection={this.state.listUsers} 
                                userSelectCollection={this.state.listUsers}
                            onSelectedEvent={this.onSelectedEvent}/>
            </View>
        )
    }

    onSelectedEvent(selectedUser: UserModel[]){
        console.log(selectedUser)
    }

}
