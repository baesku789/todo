import axios, {AxiosInstance} from "axios";
import {TodoState} from "../redux/todo";

const axiosConfig: AxiosInstance = axios.create({
    baseURL : SERVER_DOMAIN,
    timeout: 30000
})

const FrontApi = {
    getTodos : async () => {
        const response = await axiosConfig.post<TodoState>('/todos?type=list')
        return response.data
    }
}

export default FrontApi;