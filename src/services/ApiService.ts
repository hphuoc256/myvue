import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import moment from 'moment'
import { AuthHelper } from '@/helpers/Auth'

export class ApiService {

    private static _instance: ApiService

    private readonly _api: AxiosInstance

    private readonly _apiUrl: string

    constructor() {

        this._apiUrl = import.meta.env.VITE_API_URL?.toString()

        this._api = axios.create({
            baseURL: this._apiUrl,
        })

        this._api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            let url = config.url
            url = `${url}?t=${moment().unix()}`
            config.url = url
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        this._api.interceptors.response.use((response: AxiosResponse) => {
            return response.data
        }, (error) => {
            const res = {
                status: error.response.status,
                statusText: error.response.statusText,
                data: [error.response.data],
                msg: 'Response Api Failed',
            }
            return Promise.reject(res)
        })
    }

    static instance(): ApiService {
        if (!this._instance) this._instance = new ApiService()
        return this._instance
    }

    public get axios(): AxiosInstance {
        if (AuthHelper.hasToken()) {
            const token = AuthHelper.getToken()?.access_token
            this._api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        return this._api
    }
}
