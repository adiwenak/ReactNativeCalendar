
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { UserModel } from './UserModel';

interface ComponentProps {
    userCollection: UserModel[]
    userChangeEvent: (lsSelectedUser: UserModel) => void
}

export class Users extends Component<ComponentProps>
{
    constructor(props: any){
        super(props)
        this.state = { userSelected : []}
    }

    handleUserChange = (user: UserModel) => {
        user.pressStatus = !user.pressStatus
        this.props.userChangeEvent(user)
    }
    
    renderButtons() {
        if (this.props.userCollection){
            return this.props.userCollection!.map(x => {
                return  <View style={[styles.backgroundMidle]}> 
                            <View style={{backgroundColor:x.pressStatus ? x.colour : 'white'}}>
                            <Button 
                                    color={x.pressStatus ? 'white' : 'black'} 
                                    title={x.name} 
                                    onPress={() => { this.handleUserChange(x)}} />
                            </View>
                        </View>
            })
        }
        return
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
 
