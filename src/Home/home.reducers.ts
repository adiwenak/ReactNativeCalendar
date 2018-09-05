import initial from "../Store/initialState"
import { combineReducers } from "redux"
import { HomeActions, HomeActionsType } from "./home.actions"

export function coins(state: Coin[] = initial.home.ui.coins, action: HomeActions): Coin[] {
    switch(action.type) {
        case HomeActionsType.GET_COINS:
            return state
        case HomeActionsType.RECEIVED_COINS:
            return action.payload
        case HomeActionsType.CLEAR_COINS:
            return []
        default:
            return state
    }
}

export function isLoading(state: boolean = initial.home.ui.isLoading, action: HomeActions): boolean {
    switch(action.type) {
        case HomeActionsType.GET_COINS:
            return true;
        case HomeActionsType.RECEIVED_COINS:
            return false;
        default:
            return false;
    }
}

const reducer = combineReducers<HomeUI>({
    isLoading,
    coins
})

export default reducer