
import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet, Button } from "react-native"
import { styles } from './Users.style'

class App extends Component{

state = {
    ListUsers: var
}

export function Users() {
    return (
        <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.alightViewWithPadings}>
                <View style={[styles.backgroundMidle, styles.colorBlue1]}>
                    <Text style={styles.textAlightCenter}>Adiwena</Text>
                </View>
                <View style={[styles.backgroundMidle, styles.colorBlue2]}>
                    <Text style={styles.textAlightCenter}>Adam</Text>
                </View>
                <View style={[styles.backgroundMidle, styles.colorBlue3]}>
                    <Text style={styles.textAlightCenter}>Bruno</Text>
                </View>   
            </View>
        </ScrollView>
    )
}
}