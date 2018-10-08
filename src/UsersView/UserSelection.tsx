
import { Component } from "react"
import * as React from "react"
import { View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './UserSelection.style'

interface ComponentProps {
    userCollection: UserSelectionModel[]
    onSelectedEvent: (selectedUser: UserModel[]) => void
}

interface UserModel {
    id: string
    name: string
    colour: string
}

interface UserSelectionModel extends UserModel {
    isSelected: boolean
}

interface SelectedUser {
    [key: number]: UserModel
}

interface ComponentState {
    selectedUser: SelectedUser
}

export class UserSelection extends Component<ComponentProps, ComponentState>
{
    constructor(props: ComponentProps){
        super(props)
        if (props.userCollection) {
            const selectedUser: SelectedUser = {}
            props.userCollection.forEach((value: UserSelectionModel, idx: number) => {
                if (value.isSelected) {
                    selectedUser[idx] = props.userCollection[idx]
                }
            })

            this.state = {
                selectedUser
            }
        } else {
            this.state = {
                selectedUser: {}
            }
        }
    }

    renderButtons() {
        if (this.props.userCollection){
            const newSelectedUser = { ...this.state.selectedUser }
            return this.props.userCollection!.map((x: UserModel, idx: number) => {
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
 
