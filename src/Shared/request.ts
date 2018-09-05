import axios, {AxiosInstance, AxiosResponse} from "axios"
import { cmcBaseURL } from "./request.constants"
import { RequestConfig } from "./requestConfig"

export class Request {
    private ax: AxiosInstance
    constructor(config: RequestConfig) {
        this.ax = axios.create({
            baseURL: config.baseURL,
            timeout: 1000,
        })
    }

    postJSON(url: string, payload: any, headers: any) {
        return this.ax.post(url, payload)
            .then((response: AxiosResponse) => {
                return response.data
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }

    getJSON = (url: string) => {
        return this.ax.get(url)
            .then((response: AxiosResponse) => {
                return response.data
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }
}

const cmcConfig = new RequestConfig(cmcBaseURL)
const cmcAPI = new Request(cmcConfig)

const allAPI = {
    cmcAPI,
}

export default allAPI
