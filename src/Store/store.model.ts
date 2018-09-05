interface ThunkDependency {
    cmcAPI: ApiRequest
}

interface StoreState {
    home: {
        ui: HomeUI,
        data: HomeData,
    }
}
