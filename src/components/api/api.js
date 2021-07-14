import axios from 'axios'

const axiosInstance  = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})


export const passwordAPI = {
    registration(email, password) {
        return axiosInstance.post('/auth/register', {email, password})
    }
};

export const authApi = {
    login( email, password, rememberMe) {
        return axiosInstance.post('auth/login', {email, password, rememberMe})
    },
    logOut() {
        return axiosInstance.delete('auth/me')
    },
    me() {
        return axiosInstance.post('auth/me')
    }
}
