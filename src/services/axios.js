import axios from "axios";

export class axiosService {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
        });
    }

    get = async (path, config) => {
        return this.instance.get(path, config).then((res) => {
            return res;
        });
    }

    post = async (path, body, config) => {
        return this.instance.post(path, body, config).then((res) => {
            return res;
        });
    }
}