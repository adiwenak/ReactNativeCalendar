import { Component } from "react"
import * as React from "react"
import { Text, View } from "react-native"
import { connect, Dispatch } from "react-redux"
import { getAllCoins, HomeActions } from "./home.actions"
export interface Actions {
    getCoins: () => void
}

export interface Props {
    coins: Coin[],
    isLoading: boolean
}

export interface HomeProps extends Actions, Props {}

export class Home extends Component<HomeProps, any> {
    componentDidMount() {
    }

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
                <Text>{"home"}</Text>
                {this.renderCoins()}
            </View>
        )
    }
}

export function mapStateToProps(state: StoreState): Props {
    const { coins, isLoading } = state.home.ui
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

