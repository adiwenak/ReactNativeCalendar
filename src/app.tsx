import { Component } from "react"
import * as React from "react"
import { View } from "react-native"
import { UserModel } from './UsersView/usermodel';
import { Users } from './UsersView/Users';

interface ComponentState {
    userSelected: UserModel[]
    listUsers: UserModel[]
}

interface ComponentProps {
    
}

export class App extends Component<any, any> {
	constructor(props: any, context: any){
        super(props, context)
        this.state = {
            userSelected : [],
            listUsers : [new UserModel("Bruno", "powderblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adi", "skyblue", true), 
                         new UserModel("Adam", "steelblue", true)]
        }
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users  userCollection={this.state.listUsers} 
                        userSelectCollection={[]}
                        onSelectedEvent={this.onSelectedEvent}/>
            </View>
        )
    }

    onSelectedEvent(selectedUser: UserModel[]){
        console.log(selectedUser)
    }

}
