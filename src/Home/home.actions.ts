import { Dispatch, Store } from "redux"
import { createStandardAction, ActionType} from "typesafe-actions"

export enum HomeActionsType {
    GET_COINS = "COINS/GET",
    RECEIVED_COINS = "COINS/RECEIVED",
    CLEAR_COINS = "COINS/CLEAR"
}

export const getAllCoins = createStandardAction(HomeActionsType.GET_COINS)<void>()
export const receivedCoins = createStandardAction(HomeActionsType.RECEIVED_COINS)<Coin[]>();
export const clearAllCoins = createStandardAction(HomeActionsType.CLEAR_COINS)<Coin[]>();

export function getAllCoinsThunk(dispatch: Dispatch<StoreState>,
                                 getState: () => StoreState,
                                 { cmcAPI }: { cmcAPI: ApiRequest }) {

    return cmcAPI.getJSON("/")
        .then( (payload: Coin[]) => {
            dispatch(receivedCoins(payload))
        })
}

const actions = { getAllCoins, receivedCoins, clearAllCoins }

export type HomeActions = ActionType<typeof actions>