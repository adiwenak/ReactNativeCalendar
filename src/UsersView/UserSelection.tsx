
import { Component } from "react"
import * as React from "react"
import { View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './UserSelection.style'

interface ComponentProps {
    userCollection: UserModel[]
    userSelectCollection: UserModel[]
    onSelectedEvent: (selectedUser: UserModel[]) => void
}

interface UserModel {
    name: string
    colour: string
}

interface SelectedUser {
    [key: number]: UserModel
}

interface ComponentState {
    selectedUser: SelectedUser
}

export class UserSelection extends Component<ComponentProps, ComponentState>
{
    constructor(props: any){
        super(props)
        this.state = {
            selectedUser: {}
        }
    }

    renderButtons() {
        if (this.props.userCollection){
            const newSelectedUser = { ...this.state.selectedUser }
            return this.props.userCollection!.map((x: UserModel, idx: number) => {
                this.checkIfIsSelected(x, newSelectedUser, idx);
                return  <View style={[styles.backgroundMidle]}> 
                            <View style={{backgroundColor:newSelectedUser[idx] ? x.colour : 'white'}}>
                            <Button 
                                    color={newSelectedUser[idx] ? 'white':'black'} 
                                    title={x.name} 
                                    onPress={() => { 
                                        this.selectUser(x, idx)
                                    }} />
                            </View>
                        </View>
            })
        }

        return null
    }

    selectUser = (user: UserModel, idx: number) => {
        const newSelectedUser = { ...this.state.selectedUser }
        if (newSelectedUser[idx]) {
            delete newSelectedUser[idx]
        } else {
            newSelectedUser[idx] = user
        }

        this.setState({ selectedUser: newSelectedUser })
        const allValues = Object.keys(newSelectedUser).map((key: any)=> newSelectedUser[key])
        
        this.props.onSelectedEvent(allValues)
    }

    private checkIfIsSelected(x: UserModel, newSelectedUser: { [x: number]: UserModel; }, idx: number) {
        var filter = this.props.userSelectCollection.filter(userSelected => userSelected.name == x.name);
        if (filter.length > 0) {
            newSelectedUser[idx] = x;
        }
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
 
