import axios, { Method } from "axios";

const API_BASE_URL = "http://localhost:3000/api";

class  APIHelper {
    public async request(method: Method, url: string, data?: any) {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.request({
                baseURL: API_BASE_URL,
                method,
                url,
                data,
                headers: {
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
            });

            return response;
        } catch (error) {
            return undefined;
        }
    }
}

export default APIHelper;
