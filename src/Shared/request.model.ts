interface ApiRequest {
    postJSON(url: string, payload: any, headers: any): Promise<any>
    getJSON(url: string): Promise<any>
}
