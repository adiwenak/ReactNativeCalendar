
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { Home } from '../Home/home'

interface ComponentState {
    userSelected: string[]
}

interface ComponentProps {
    userCollection: string[]
    userChangeEvent: (selectedUser: string[]) => void
}


interface UserModel {
    name: string
    colour?: string
}

export class Users extends Component<ComponentProps, ComponentState>
{
    constructor(props: any){
        super(props)
        this.state = { userSelected : ['']}
    }

    handleToggle = () => this.setState({userSelected: this.state.userSelected})

    handleUserChange = (name: string) => {
        this.props.userChangeEvent(this.state.userSelected.concat(name))
    }

    renderButtons() {
        return this.props.userCollection!.map((name:string) => {
            return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
                        <Button 
                            color='white' 
                            title={name} 
                            onPress={() => { this.handleUserChange(name)}} />
                    </View>
        })
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
 
