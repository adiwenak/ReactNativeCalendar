
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { UserModel } from './UserModel';

interface ComponentProps {
    userCollection: UserModel[]
    userSelectCollection: UserModel[]
    onSelectedEvent: (selectedUser: UserModel[]) => void
}

interface SelectedUser {
    [key: number]: UserModel
}

interface ComponentState {
    selectedUser: SelectedUser
}

export class Users extends Component<ComponentProps, ComponentState>
{
    constructor(props: any){
        super(props)
        this.state = {
            selectedUser: {}
        }
    }

    renderButtons() {
        if (this.props.userCollection){
            return this.props.userCollection!.map((x: UserModel, idx: number) => {
                return  <View style={[styles.backgroundMidle]}> 
                            <View style={{backgroundColor:x.pressStatus ? x.colour : 'white'}}>
                            <Button 
                                    color={x.pressStatus ? 'white' : 'black'} 
                                    title={x.name} 
                                    onPress={() => { this.selectUser(x, idx)}} />
                            </View>
                        </View>
            })
        }
        return
    }

    selectUser = (user: UserModel, idx: number) => {
        const newSelectedUser = { ...this.state.selectedUser }
        user.pressStatus = !user.pressStatus
        if (newSelectedUser[idx]) {
            delete newSelectedUser[idx]
        } else {
            newSelectedUser[idx] = user
        }

        this.setState({ selectedUser: newSelectedUser })
        const allValues = Object.keys(newSelectedUser).map((key: any)=> newSelectedUser[key])
        
        this.props.onSelectedEvent(allValues)
    }

    render(){
        return (
            <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.alightViewWithPadings}>
                    {this.renderButtons()}
                </View>
            </ScrollView>
        )
    }
}
 
