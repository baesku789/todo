import axios, {AxiosInstance} from "axios";

const axiosConfig: AxiosInstance = axios.create({
    baseURL : SERVER_DOMAIN,
    timeout: 30000
})

const FrontApi = {
    getBody : async () => {
        const response = await axiosConfig.get('/')
        return response.data
    },

    getTodos : async () => {
        const response = await axiosConfig.get('/todos')
        return response.data
    }
}

export default FrontApi;