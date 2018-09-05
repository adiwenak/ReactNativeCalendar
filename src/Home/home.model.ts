interface Coin {
    id: string
    name: string
}

interface HomeData {
    [id: string]: Coin
}

interface HomeUI {
    isLoading: boolean
    coins: Coin[]
    users: Users[]
}

interface Users {
    id: string
    name: string
}
