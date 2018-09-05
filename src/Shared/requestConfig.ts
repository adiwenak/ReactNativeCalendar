
interface RequestHeader { }

const defaultHeader: RequestHeader = { }

export class RequestConfig {
    constructor(public baseURL: string, public header: RequestHeader = defaultHeader) { }

    getAllHeaders() {
        return this.header
    }
}
