import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { connect, Dispatch } from "react-redux"
import { getAllCoins, HomeActions } from "./home.actions"

export interface Actions {
    getCoins: () => void
}

export interface Props {
    coins: Coin[],
    isLoading: boolean,
    users: Users[],
}


export interface HomeProps extends Actions, Props {}

export function SearchData(){
    
}

export class Home extends Component<HomeProps, any> {
    renderCoins() {
        if (!this.props.coins) {
            return null
        }
        const coinsElement = this.props.coins.map((coin) => {
            return (
                <View>
                    <Text>{coin.name}</Text>
                </View>
            )
        })

        return coinsElement
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <ScrollView>
                    <ScrollView horizontal contentContainerStyle={{flexGrow: 1}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent:"center", marginHorizontal: 10, marginTop:10}}>
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
                </ScrollView>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundMidle: {
        justifyContent: 'center', 
        alignItems: 'center',
        margin:2
    },

    textAlightCenter: {
        textAlign:"center", 
        margin: 8,
    },

    colorBlue1: {
        backgroundColor: 'powderblue'
    },

    colorBlue2: {
        backgroundColor: 'skyblue'
    },

    colorBlue3: {
        backgroundColor: 'steelblue'
    },
})

export function mapStateToProps(state: StoreState): Props {
    const { coins, isLoading, users } = state.home.ui
    return {
        coins,
        isLoading, 
        users
    }
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): Actions {
    return {
        getCoins: () => { dispatch(getAllCoins()) }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

