
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
// import { UserModel } from './user.model';

interface ComponentProps {
    userCollection: string[]
    userChangeEvent: (lsSelectedUser: string) => void

    // userCollection: UserModel[]
    // userChangeEvent: (lsSelectedUser: UserModel) => void
}

export class Users extends Component<ComponentProps>
{
    constructor(props: any){
        super(props)
        this.state = { userSelected : []}
    }

    handleUserChange = (user: string) => {
        this.props.userChangeEvent(user)
        // this.props.userChangeEvent(user)
    }
    
    renderButtons() {
        if (this.props.userCollection){
            return this.props.userCollection!.map((name:string) => {
                return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
                            <Button 
                                color='white' 
                                title={name} 
                                onPress={() => { this.handleUserChange(name)}} />
                        </View>
            })

            // return this.props.userCollection!.map(x => {
            //     return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
            //                 <Button 
            //                     color='white' 
            //                     title={x.name} 
            //                     onPress={() => { this.handleUserChange(x)}} />
            //             </View>
            // })
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
 
