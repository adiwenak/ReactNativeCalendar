
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { Home } from '../Home/home'
export class Users extends Component
{

    constructor(props: any){
        super(props)
        this.state = { userSelected : ''}
    }

    selectUser(User: string){
        this.setState({ userSelected : User})

    }

    render(){
        return (
            <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.alightViewWithPadings}>
                    {this.props.children!.map((name:string) => {
                        return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
                                    <Button color = 'white' title={name} onPress={ () => { 
                                        this.selectUser(name)
                                    }}/>
                                </View>
                    })}
                </View>
            </ScrollView>
        )
    }
}
 
