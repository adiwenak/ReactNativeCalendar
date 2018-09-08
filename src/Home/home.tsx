import { Component } from "react"
import * as React from "react"
import { Text, View, ScrollView, StyleSheet } from "react-native"
import { connect, Dispatch } from "react-redux"
import { getAllCoins, HomeActions } from "./home.actions"
import { Users } from '../Users/Users';

export interface Actions {
    getCoins: () => void
}

export interface Props {
    coins: Coin[],
    isLoading: boolean
}

export interface HomeProps extends Actions, Props {}
export function SearchData(){}

export class Home extends Component<HomeProps, any> {
    render() {
        return (
            <View>
                <View style={{backgroundColor:'#1111', height: 60}}></View>
                <Users children={["Bruno", "Adi", "Adam"]} ></Users>
            </View>
        )
    }
}

export function mapStateToProps(state: StoreState): Props {
    const { coins, isLoading} = state.home.ui
    return {
        coins,
        isLoading
    }
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): Actions {
    return {
        getCoins: () => { dispatch(getAllCoins()) }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

