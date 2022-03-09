import axios, {AxiosInstance} from "axios";

const axiosConfig: AxiosInstance = axios.create({
    baseURL : SERVER_DOMAIN,
    timeout: 30000
})

const FrontApi = {
    getTodos : async () => {
        const response = await axiosConfig.post('/todos?type=list')
        return response.data.json
    }
}

export default FrontApi;