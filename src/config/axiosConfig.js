import axios from 'axios';
import Constants from "expo-constants";

const getToken = () => {
    // const token = JSON.parse('a' || '');
    // return token?.token
}

const Axios = axios.create({
    baseURL: Constants.manifest.extra.BACKEND,
    // timeout: 5000,
    headers: {
        Authorization: getToken() 
    }
})

export default Axios;