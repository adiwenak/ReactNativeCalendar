
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'
import { Home } from '../Home/home'

export class Users extends Component 
{
    constructor(props: any){
        super(props)
        this.state = { userSelected : 'Bruno'}
    }

    // Shows or hide the Drawer
    handleToggle = () => this.setState({userSelected: 'Bruno2'})

    render(){
        return (
            <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.alightViewWithPadings}>
                    {this.props.children!.map((name:string) => {
                        return  <View style={[styles.backgroundMidle, styles.colorBlue1]}> 
                                    <Button color = 'white' title={name} onPress={ () => { 
                                        this.setState({name})
                                        this.handleToggle = () => this.setState({userSelected: name})
                                    }}/>
                                </View>
                    })}
                </View>
            </ScrollView>
        )
    }
}
 
